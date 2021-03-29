import { createContext, useContext, useState } from "react";
import { Redirect, Route } from "react-router";

export const UserContext = createContext(null);
export const UserProvider = (props) => {
  const [User, setUser] = useState([]);
  return (
    <UserContext.Provider value={[User, setUser]}>
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
