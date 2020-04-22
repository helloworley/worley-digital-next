import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core/styles';

// material
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { AppBar, Toolbar, Drawer, Typography, Hidden } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';

// custom
import NavContents from './NavContents';

const drawerWidth = 240;

const styles = theme => createStyles({
  list: {
    width: 250,
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&.filled': {
      backgroundColor: theme.palette.sedona.white,
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
  },
  navName: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    top: '3px'
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
    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );



  return (
    <Hidden mdUp>
      <AppBar position="fixed" className={classes.appBar} id="app-bar">
        <Toolbar className={classes.toolbar}>
          <div className={classes.burgerContainer} onClick={this.toggleDrawer('left', true)}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>
          <Link href="/">
            <p className={classes.navName}>Worley Digital</p>
          </Link>
          {/* <img className={classes.logo} src="/ikigai-light.svg" /> */}
        </Toolbar>
      </AppBar>

      <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
        <NavContents />
      </Drawer>
    </Hidden>
  );
}};

NavMobile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavMobile);