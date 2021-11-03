import Footer from "./components/Footer";
import React from "react";

import "./global.css";
// import List from './components/List'
// import Nav from './components/Nav';
import PortfolioContainer from "./components/PortfolioContainer";
import { makeStyles } from "@material-ui/core";

const contentStyles = makeStyles(() => ({
  content: {
    paddingTop: "100px",
    minHeight: "calc(100vh - 265px)",
  },
}));

export default function App() {
  const { content } = contentStyles();
  return (
    <>
      <div className={content}>
        <PortfolioContainer />
      </div>
      <Footer />
    </>
  );
}
