import React from 'react';
import { FormHelperText, makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';

const aboutStyles = makeStyles(() => ({
  mainGrid: {
    justifyContent: 'center',
  },
  about: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: '1px',
    borderColor: '#2c3531',
    borderRadius: '20px',
    m: 10,
    p: 5,
    minHeight: '82vh',
    backgroundColor: '#313533',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    height: 'fit-content'
  },
  examples: {
    p: 20,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    width: '100%'
  },
  contentHeading: {
    fontSize: '175%',
    backgroundColor: '#313533',
    color: '#fff',
    marginBlockStart: '0em',
    pt: 5
  }
}))

export default function About() {
  const { about, examples, contentHeading, mainGrid, drawerContainer } = aboutStyles();
  return (
            <Grid xs={8} className={mainGrid}>
                <div className={about}>
                    <div className={examples}>
                        <div class="col l12 m12 s12">
                            <p className={contentHeading}>About me</p>
                        </div>
                        <div class="col l12 m12 s12">
                            <header class="card"><img id="picMe" src="https://avatars.githubusercontent.com/u/83562370?v=4" /></header>
                            <p>
                                I have always found technology and, by association, coding
                                exciting. After more than ten years working in various
                                pharmaceutical laboratories as an analytical chemist, I'm
                                hoping to turn an old hobby into a career. This led to my
                                enrollment in the UNC Chapel Hill Coding Bootcamp where I've
                                becoming familiar with HTML, CSS, Javascript, Git, and Node
                                I'm interested in seeing where these new skills will take me.
                                <br />
                                In my free time I enjoy lifting, hanging out with my family,
                                and reading.
                            </p>
                            <div class="resume">Resume:<a href="assets/resume/CAT-resume-cut-Aug2021.pdf"><i class="small material-icons">file_download</i></a></div>
                        </div>
                    </div>
                </div>
                </Grid>
  );
}
