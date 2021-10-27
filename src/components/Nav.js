import {
  AppBar,
  Toolbar,
  // Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';

const headersData = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Projects',
    href: '/project',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#116466',
  },
  header: {
    backgroundColor: "#313533",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  // logo: {
  //   fontFamily: "Work Sans, sans-serif",
  //   fontWeight: 600,
  //   color: "#FFFEFE",
  //   textAlign: "left",
  // },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 500,
    fontSize: "30px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Nav({ currentPage, handlePageChange }) {
  const { header, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
      ? setState((prevState) => ({ ...prevState, mobileView: true}))
      : setState((prevState) => ({ ...prevState, mobileView: false}));
    };

    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    }
  }, []);

  const displayDesktop = () => {
    console.log();
    return (
      <Toolbar className={toolbar}>
        {/* {CAT logo} */}
        Logo will go here
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => 
      setState((prevState) => ({ ...prevState, drawerOpen: false }));    

    return (
      <Toolbar>
        <IconButton
        {...{
          edge: 'start',
          color: 'inherit',
          'aria-label': 'menu',
          'aria-haspopup': 'true',
          onClick: handleDrawerOpen
        }}
        >
          <MenuIcon />
        </IconButton>
        <div>If you like Pinacoladas</div>

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
          >
            <div className={drawerContainer}>
              For now it's just this
              {getDrawerChoices()}
            </div>
          </Drawer>
          <div>Insert Logo</div>
      </Toolbar>
    );
  };

  const displayPage = (label) => {
    console.log("inside of display page function: ", headersData)
    handlePageChange(label)
  };


  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: 'inherit',
            style: { textDecoration: 'none' },
            key: label,
            onClick: (event) => handlePageChange(event, label)
          }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
      )
    })
  }

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            value: label,
            color: 'inherit',
            to: href,
            component: RouterLink,
            className: menuButton,
            onClick: (event) => handlePageChange(event, label)
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};

