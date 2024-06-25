import React from "react";
import { Route } from "react-router-dom";
import TokenAuthentication from "./TokenAuthentication";
import Page404 from "../auth/Page403";

const ProtectedRoutes = ({
  component: Component,
  layout: Layout,
  roles: Roles,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        TokenAuthentication(props, Roles) ? (
          <Layout>
            <Component {...rest} {...props} />
          </Layout>
        ) : (
          <Page404 />
        )
      }
    ></Route>
  );
};

export default ProtectedRoutes;
