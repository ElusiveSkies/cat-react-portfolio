import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import DownloadIcon from "@mui/icons-material/Download";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import "../../global.css";

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
  gridContent: {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    width: "100%",
  },
  content: {
    backgroundColor: "#313533",
    color: "white",
    padding: "0px",
    fontSize: "115%",
    borderWidth: "0px",
  },
  contentHeading: {
    fontSize: "350%",
    backgroundColor: "#313533",
    color: "#fff",
    paddingTop: "5px",
  },
  resume: {
    fontSize: "42px",
    paddingTop: "20px",
  },
  downloadButton: {
    color: "white",
    fontSize: "36px",
  },
  picMe: {
  [theme.breakpoints.down('sm')]: {
    width: "200px",
    height: "200px",
  },
},
}));

export default function About() {
  const {
    mainGrid,
    about,
    content,
    contentHeading,
    gridContent,
    resume,
    downloadButton,
    picMe,
  } = aboutStyles();
  return (
    <Grid className={mainGrid}>
      <div sm={12} className={about}>
        <div>
          <p className={contentHeading}>About me</p>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} className={gridContent}>
            <Grid item xs={12} md={7}>
              <div xs className={content}>
                <img
                  className={picMe}
                  alt="Me"
                  src="https://avatars.githubusercontent.com/u/83562370?v=4"
                />
              </div>
            </Grid>
            <Grid xs={12} md={5} className={content}>
              <p item xs className={content}>
                I have always found technology and, by association, coding
                exciting. After more than ten years working in various
                pharmaceutical laboratories as an analytical chemist, I'm hoping
                to turn an old hobby into a career. This led to my enrollment in
                the UNC Chapel Hill Coding Bootcamp where I've becoming familiar
                with HTML, CSS, Javascript, Git, and Node I'm interested in
                seeing where these new skills will take me.
                <br />
                In my free time I enjoy lifting, hanging out with my family, and
                reading.
              </p>
            </Grid>
            <div className={resume}>
              Resume:
              <Link
                href="assets/resume/CAT-resume-cut-Aug2021.pdf"
                target="_blank"
              >
                <DownloadIcon fontSize="36px" className={downloadButton} />
              </Link>
            </div>
          </Grid>
        </Box>
      </div>
    </Grid>
  );
}
