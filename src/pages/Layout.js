import { Outlet } from "react-router-dom";
import DrawerAppBar from "../components/DrawerAppBar/DrawerAppBar";
import Container from "@mui/material/Container";
import React from "react";
import Footer from "../components/Footer/Footer";

const Layout = ({ toggleTheme, darkMode }) => {
  console.log(toggleTheme);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <DrawerAppBar onThemeToggle={toggleTheme} darkMode={darkMode} />
      <Container
        component="main"
        style={{ flexGrow: 1, paddingTop: "3rem", paddingBottom: "3rem" }}
        className="content"
      >
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
