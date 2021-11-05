import React from 'react';
import { makeStyles } from "@material-ui/core";
import Link from '@mui/material/Link'
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import HoverImage from "react-hover-image";

import "../../global.css";
import { render } from 'react-dom';

const containerStyles = makeStyles((theme) => ({
  mainGrid: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    borderWidth: "1px",
    borderColor: "#2c3531",
    borderRadius: "20px",
    backgroundColor: "#313533",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    maxWidth: "80%",
    "@media (max-width: 900px)": {
      maxWidth: '95%',
    },
  },
  examples: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',

    "@media (max-width: 900px)": {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  projectContainer: {
    fontSize: '100%',
    margin: '10px',
    alignContent: 'center',
    border: '3px solid white',
    width: 'fit-content',
    maxWidth: '425px',
    transition: 'all 0.5s ease-in-out',
    position: 'relative',
  },
  card: {
    backgroundColor: '#6e6e6e',
    color: 'white',
    fontSize: '175%',
  },
  linkStyles: {
    display: 'flex',
    color: '#313533',
    justifyContent: 'space-evenly',
    backgroundColor: '#6e6e6e',
    borderTop: '8px solid #6e6e6e',
    alignContent: 'bottom',
    position: 'absolute',
    bottom: '0px',
    width: '100%',
  },
  imgStyles: {
    width: "100%",
    alignContent: 'bottom',
  },
  gitHubIconStyle: {
    fontSize: "32px",
    textAlign: "center",
    color: 'white',
    "&:hover": {
      color: "#bbbbbb",
    },
  },
  externalLink: {
    color: 'white !important',
    fontSize: '115%',
    textDecoration: 'none !important',
    "&:hover": {
      color: "#bbbbbb !important",
    },
  }
}));

export default function Project({ projects }) {
  const { mainGrid, container, examples, projectContainer, card, linkStyles, imgStyles, gitHubIconStyle, externalLink } = containerStyles();
  return (
    <Grid className={mainGrid}>
      <div sm={12} className={container}>
        <h1>Projects</h1>
        <div className={examples}>
          {projects.map((project) => (
            <section className={projectContainer} key={project.id}>
              <header className={card}>{project.title}</header>
              <p>
                {project.description}
                {(project.tools.framework) ? (<ul>Framework: {project.tools.framework}</ul>) : (null)}
                <ul>Development: {project.tools.development}</ul>
              </p>
              <HoverImage id={project.title} src={project.img.static} hoverSrc={project.img.animated} className={imgStyles} />
              <div className={linkStyles}>
                {(project.link.deploy) ? (
                  <div className={externalLink}>
                    <Link
                      className={externalLink}
                      href={`${project.link.deploy}`}
                      target="_blank"
                    >
                      View
                    </Link>
                  </div>
                ) : (null)
                }
                <div>
                  <Link href={project.link.repository} target="_blank">
                    <GitHubIcon fontSize="32px" className={gitHubIconStyle} />
                  </Link>
                </div>
              </div>
            </section>
          )
          )}
        </div>
      </div>
    </Grid>
  )
};
