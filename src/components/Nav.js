import {
  AppBar,
  Toolbar,
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
// import logo from './logo/cat-logo.png'

const headersData = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Project',
    href: '/project',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Resume',
    href: '/resume',
  }
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
  logo: {
    width: '150px',
    height: '67px',
    textAlign: "left",
  },
  menuIcon: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 200,
    marginLeft: "38px",
    "&:hover": {
      color: "#32e1e4",
    },
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 500,
    fontSize: "30px",
    marginLeft: "38px",
    "&:hover": {
      color: "#32e1e4",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    color: "#313533",
    fontSize: "30px",
    padding: "10px 20px",
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
      return window.innerWidth < 1000
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
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
        <img src='./images/cat-logo.png' alt='logo image' width='150px' height='67px' />
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

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClick: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {getDrawerChoices()}
          </div>
        </Drawer>
        <img src='./images/cat-logo.png' alt='logo image' width='112px' height='50px' />
      </Toolbar>
    );
  };


  const getDrawerChoices = () => {
    return headersData.map(({ label, href, menuIcon }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: 'inherit',
            style: { textDecoration: 'none' },
            key: label,
            className: menuIcon,
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