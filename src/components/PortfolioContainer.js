import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { makeStyles } from '@material-ui/core';

const contentStyles = makeStyles(() => ({
  content: {
    paddingTop: '50px',
  }
}))

export default function PortfolioContainer() {
  const [displayedPage, setPage] = useState('Home');

  const renderPage = () => {
    if (displayedPage === 'Home') {
      return <Home />;
    }
    if (displayedPage === 'About') {
      return <About />;
    }
    if (displayedPage === 'Projects') {
      return <Project />;
    }
    return <Contact />;
  };

  console.log();

  const handlePageChange = (event, page) =>{ console.log("inside set page event: ", event);  console.log("inside set page func: ", page); setPage(page)};

  return (
    <div className={contentStyles}>
      <Nav currentPage={displayedPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
