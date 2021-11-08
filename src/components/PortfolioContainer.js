import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { makeStyles } from '@material-ui/core';
import resumePDF from '../assets/resume/CAT-resume-cut-Aug2021.pdf';
import projects from './pages/projects';

const contentStyles = makeStyles(() => ({
  content: {
    paddingTop: '50px',
  }
}))

export default function PortfolioContainer() {
  const [displayedPage, setPage] = useState('Project');

  const renderPage = () => {
    if (displayedPage === 'Project') {
      return <Project projects={projects} />;
    }
    if (displayedPage === 'Contact') {
      return <Contact />;
    }
    if (displayedPage === 'Resume') {
      return window.open(resumePDF, '_blank') && <About />;
    }
    if (displayedPage === 'About') {
    return <About />;
    }
  };


  const handlePageChange = (event, page) =>{setPage(page)};

  return (
    <div className={contentStyles}>
      <Nav currentPage={displayedPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
