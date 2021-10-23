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
    label: 'About Me',
    href: '/about',
  },
  {
    label: 'Projects',
    href: '/project',
  },
  {
    label: 'Resume',
    href: '/resume',
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#400CCC',
    paddingRight: '79px',
    paddingLeft: '118px',
  '@media (max-width: 900px': {
    paddingLeft: 0,
  },
  drawerContainer: {
    padding: '20px 30px',
  }
}
}));

export default function Nav() {
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
    return (
      <Toolbar>
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
          onClick: handleDrawerOpen,
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
            <div>
              For now it's just this
              {getDrawerChoices()}
            </div>
          </Drawer>
          <div>Insert Logo</div>
      </Toolbar>
    );
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
            color: 'inherit',
            to: href,
            component: RouterLink,
            // className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};