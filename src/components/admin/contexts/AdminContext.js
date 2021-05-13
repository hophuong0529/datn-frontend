import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router";

export const AdminContext = createContext(null);

export const AdminProvider = (props) => {
  const [admin, setAdmin] = useState([]);
  const token = localStorage.getItem("token_admin");

  useEffect(() => {
    if (token) {
      axios
        .get(`http://127.0.0.1:8000/api/admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setAdmin(response.data);
        });
    }
  }, [token]);

  return (
    <AdminContext.Provider value={[admin, setAdmin]}>
      {props.children}
    </AdminContext.Provider>
  );
};

export const PrivateAdminRoute = ({ component: Component, ...rest }) => {
  const [admin] = useContext(AdminContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        admin.length !== 0 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/admin/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
