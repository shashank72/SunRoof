import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import Home from "../home";
import { Box } from "@mui/material";

function Main() {
  return (
    <>
      <Header />
      <Box sx={{ overflow: "auto", height: "calc(90% - 60px)" }}>
        <Home />
      </Box>
      <Footer />
    </>
  );
}

export default Main;
