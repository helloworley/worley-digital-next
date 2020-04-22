import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import navItems from '../../data/navItems';
import navSocials from '../../data/navSocials';

const menuItems = navItems;
const socialItems = navSocials;


const useStyles = makeStyles({
  navigation: {
    padding: '20px 40px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    height: '95px',
    position: 'fixed',
    backgroundColor: 'white',
    top: '0',
    zIndex: '1000',
  },
  socialLogos: {
  
    bottom: '40px',
    left: '0',
  },
  socialsList: {
    display: 'flex',
    padding: '0',
  },
  socialsListItem: {
    listStyle: 'none',
    margin: '0 20px 0 0'
  },
  socialLogo: {
    height: '12px',
    width: 'auto',
    margin: '8px 0 0 0',
  },
  list: {
    margin: 0,
    display: 'flex',
  },
  listItem: {
    listStyle: 'none',
    padding: '6px 0',
    margin: '10px 30px 0 0',
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'text'
  },
  logoContainer: {
    display: 'flex',
    minWidth: '200px',
  },
  logo: {
    color: 'text',
    cursor: 'pointer',
    maxWidth: '40px',
  },
  logoText: {
    lineHeight: '54px',
    margin: '0 0 0 8px',
    cursor: 'pointer',
  },
  a: {
    listStyle: 'none',
    padding: '6px 0',
    color: '#333',
  },
  navRight: {
    display: 'flex',
  }
});


const getSingleMenuItem = (menuItem, menuColor) => {
  const classes = useStyles();
  return (
    <Link href={menuItem.link}>
      <a className={classes.a} style={{color: menuColor}}>
        {menuItem.name}
      </a>
    </Link>
  )
}

const getMenuChildren = (name, menuChildren, menuColor) => {
  const classes = useStyles();
  return (
    <span>
      <Text
        sx={{
          color: '#bababa'
        }}
      >
        {name}
      </Text>
      <ul>
        {menuChildren.map(childItem => (
          <li key={childItem.name} className={classes.listItem}>
            <Link href={childItem.link}>
              <a className={classes.a} style={{color: menuColor}}>
                {childItem.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </span>
  )
}




const NavDesktop = props => {
  const classes = useStyles();
  return (
    <div className={classes.navigation} id="navigation">
      
      <Link href="/">
        <div className={classes.logoContainer}>
          <img className={classes.logo} src="/ikigai-dark.svg" />
            <Typography className={classes.logoText} style={{color: props.menuColor}}>Worley Digital</Typography>
          </div>
        </Link>

      <div className={classes.navRight}>
        <ul className={classes.list}>
          {menuItems.map(menuItem => (
            <li key={menuItem.name} className={classes.listItem}>
              {menuItem.children ? getMenuChildren(menuItem.name, menuItem.children, props.menuColor) : getSingleMenuItem(menuItem, props.menuColor)}
            </li>
          ))}
        </ul>
        <div className={classes.socialLogos}>
            <ul className={classes.socialsList}>
              {socialItems.map(socialItem => (
                <li className={classes.socialsListItem} key={socialItem.logoDark}>
                  <a href={socialItem.link} target="_blank">
                    <img className={classes.socialLogo} src={socialItem.logoDark}/>
                  </a>
                </li>  
              ))}
            </ul>
        </div>

      </div>
    </div>

  )
};





export default NavDesktop;