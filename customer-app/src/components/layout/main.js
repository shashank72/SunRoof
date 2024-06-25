import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import { Box } from "@mui/material";

function Main({ children }) {
  return (
    <>
      <Header />
      <Box sx={{ overflow: "auto", height: "calc(90% - 60px)" }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Main;
