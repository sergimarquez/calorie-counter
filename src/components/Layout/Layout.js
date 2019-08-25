import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

const pageContainer = {
  backgroundColor: "rgba(193, 213, 224, 0.247)",
  position: "relative",
  minHeight: "100vh",
  paddingTop: "3em"
};

const contentWrap = {
  paddingBottom: "2.5em"
};

const Layout = () => {
  return (
    <div style={pageContainer}>
      <Header />
      <div style={contentWrap}>
        <Card />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
