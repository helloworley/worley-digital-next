import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core/styles';

// material
import { AppBar, Toolbar, Drawer, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';

// custom
import NavContents from './NavContents';

// locale
import LocaleSwitcher from '../LocaleSwitcher';

const drawerWidth = 240;

const styles = theme => createStyles({
  list: {
    width: 250,
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&.filled': {
      backgroundColor: 'rgba(17,17,17,.7)',
      color: theme.palette.primary.main,
      boxShadow: theme.shadows[5],
      transition: 'background-color .3s ease-in-out, box-shadow .3s ease-in-out',
    },
  },
  burgerContainer: {
    zIndex: 1000,
  },
  fullList: {
    width: 'auto',
  },
  toolbar: {
    textAlign: 'center',
    position: 'relative',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    color: 'text',
    cursor: 'pointer',
    maxWidth: '100px',
  },
  navName: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: '56px',
    // left: 0,
    // right: 0,
    top: '3px'
  },
  rightWrapper: {
    display: 'flex',
  },
  LocaleSwitcher: {
    margin: '10px 20px 0 0'
  },
  icon: {
    color: '#fff'
  }
});

class NavMobile extends React.Component {

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    windowPosition: 0
  };

  // for toggling the right nav in mobile and tablet
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  // for gettting the scroll position and editing the background color for the nav
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }  

  // set the windowPosition state property based on the scroll event
  handleScroll() {
    let lastScrollY = window.scrollY;
    this.setState({
      windowPosition: lastScrollY
    });
    this.toggleNavClass();
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  // add or remove class to the nav based on the state
  toggleNavClass() {
    const appBar = document.getElementById('app-bar');
    this.state.windowPosition > 100 ? appBar.classList.add('filled') : appBar.classList.remove('filled');
  };

  render() {
    const { classes, navItems, topRef } = this.props;
    
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} id="app-bar">
        <Toolbar className={classes.toolbar}>
          <Link href="/">
            {/* <p className={classes.navName}>Worley Digital</p> */}
            <img className={classes.logo} src="/worley-digital-logo.svg" id="logo" />
          </Link>
          <div className={classes.rightWrapper}>
            <div  className={classes.LocaleSwitcher}>
              <LocaleSwitcher/>
            </div>
            <div className={classes.burgerContainer} onClick={this.toggleDrawer('left', true)}>
              <IconButton edge="start" aria-label="menu" className={classes.icon}>
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
        <NavContents locale={this.props.locale}/>
      </Drawer>
    </>
  );
}};

NavMobile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavMobile);