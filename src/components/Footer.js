import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Link from "@mui/material/Link";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../global.css";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#313533",
    fontSize: "large",
    color: "white",
    fill: "white",
    padding: "20px",
    marginTop: "36px",
    width: "100%",
    position: "absolute",
    [theme.breakpoints.down('sm')]: {
      padding: "0px",
    },
  },
  lowerLinks: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  footerButtons: {
    fontSize: "42px",
    color: "white",
    "&:hover": {
      color: "#32e1e4",
    },
  },
  footerCopyright: {
    fontSize: "24px",
    textAlign: "center",
    paddingTop: "15px",
  },
}));

export default function Footer() {
  const { footer, lowerLinks, footerButtons, footerCopyright } = useStyles();
  return (
    <footer className={footer}>
      <Container>
        <div>
          <div className={lowerLinks}>
            <Link href="https://github.com/ElusiveSkies" target="_blank">
              <GitHubIcon fontSize="42px" className={footerButtons} />
            </Link>
            <Link href="tel:‪9106238447" target="_blank">
              <PhoneIcon fontSize="42px" className={footerButtons} />
            </Link>
            <Link href="mailto: elusiveskies@gmail.com" target="_blank">
              <EmailIcon fontSize="42px" className={footerButtons} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/casey-twine-90b51677"
              target="_blank"
            >
              <LinkedInIcon fontSize="42px" className={footerButtons} />
            </Link>
          </div>
          <div className={footerCopyright}>
            <div>© 2021 Copyright Casey Twine</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
