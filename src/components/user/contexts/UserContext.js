import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(`http://127.0.0.1:8000/api/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        });
    }
  }, [token]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  let [user] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user.length !== 0 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
