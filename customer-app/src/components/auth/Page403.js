import { Button } from "@mui/material";
import React from "react";
import { Link, withRouter } from "react-router-dom";

const Page404 = (props) => {
  const onBackClick = () => {
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("user-info");
    props.history.push("/login");
  };
  return (
    <div className="text-center">
      <h1 className="display-1 font-weight-bold">403</h1>
      <p className="h1">Un-Authorized</p>
      <p className="h2 font-weight-normal mt-3 mb-4">
        You are Not authorized to acess this page.
      </p>
      <Link to="/dashboard">
        <Button color="primary" size="lg" onClick={onBackClick}>
          Return to website
        </Button>
      </Link>
    </div>
  );
};

export default Page404;
