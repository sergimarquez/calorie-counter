import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrap">
        <Card />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
