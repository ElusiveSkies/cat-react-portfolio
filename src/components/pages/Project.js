import React from 'react';
import { makeStyles } from "@material-ui/core";
import Link from '@mui/material/Link'
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import HoverImage from "react-hover-image";

import "../../global.css";
import { render } from 'react-dom';

const aboutStyles = makeStyles((theme) => ({
  mainGrid: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  about: {
    display: "flex",
    flexDirection: "column",
    borderWidth: "1px",
    borderColor: "#2c3531",
    borderRadius: "20px",
    backgroundColor: "#313533",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    maxWidth: "75%",
  },
}));

export default function Project({ projects }) {
  const { mainGrid, about } = aboutStyles();
  return (
    <Grid className={mainGrid}>
      <div sm={12} className={about}>
        <h1>Projects</h1>
        {projects.map((project) => (
          <section className="project" key={project.id}>
            <header className="card">{project.title}</header>
            <p>
              {project.description}
                    <ul>Framework: {project.tools.framework}</ul>
              <ul>Development: {project.tools.development}</ul>
            </p>
            <HoverImage id={project.title} src={project.img.static} hoverSrc={project.img.animated} width="100%" />
            <div className="links">
              {projects.forEach((project) => {
                if (project.link.deploy) {
                  return (
                    <div>
                      <Link
                        className="externalLink"
                        href={`${project.link.deploy}`}
                        target="_blank"
                      >
                        View
                      </Link>
                    </div>
                  );
                }
              })}
              <div>
                <Link href={project.link.repository} target="_blank">
                  <GitHubIcon fontSize="32px" />
                </Link>
              </div>
            </div>
          </section>
        )
        )}
      </div>
    </Grid>
  )
};
