import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import { ProjectRoutes as dashboardRoutes } from "./index";
import ProtectedRoutes from "../components/common/ProtectedRoutes";
import { ToastContainer } from "react-toastify";
import Main from "../components/layout/main";
import Home from "../components/home";

const Routes = () => {
  const childRoutes = (Layout, routes) =>
    routes.map(
      (
        { roles: Roles, protected: Protected, path, component: Component },
        index
      ) =>
        Protected ? (
          // Route item with children
          <ProtectedRoutes
            key={index}
            path={path}
            exact
            roles={Roles}
            layout={Layout}
            component={Component}
          />
        ) : (
          //Route item without children
          <Route
            key={index}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        )
    );
  return (
    <>
      <Switch>
        {childRoutes(Main, dashboardRoutes)}

        <Route exact path="/" element={<Navigate to="/dashboard" replace />} />
      </Switch>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Routes;
