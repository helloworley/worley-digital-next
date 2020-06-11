import Link from 'next/link';
import { Typography, Divider, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import navItemsMobile from '../../data/navItemsMobile';
import navSocials from '../../data/navSocials';

const menuItems = navItemsMobile;


const useStyles = makeStyles({
  navigation: {
    padding: '64px 0',
  },
  socialLogos: {
    position: 'absolute',
    bottom: '40px',
    left: '0',
  },
  socialsList: {
    display: 'flex',
  },
  socialsListItem: {
    listStyle: 'none',
    margin: '0 12px 0 0'
  },
  socialLogo: {
    height: '12px',
    width: 'auto',
  },
  list: {
    margin: 0,
    padding: '64px 0 0',
  },
  listItem: {
    listStyle: 'none',
    padding: '6px 0',
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'text'
  },
  logoContainer: {
    textAlign: 'center',
  },
  logo: {
    color: 'text',
    cursor: 'pointer',
    maxWidth: '160px',
    margin: '0 0 4px',
  },
  a: {
    listStyle: 'none',
    padding: '6px 0',
    color: '#333',
    textDecoration: 'none',
  },
  listItem: {
    minWidth: '340px',
    textAlign: 'center',
  },
  text: {
    '& span': {
      fontWeight: 'bold',
    }
  }
});


const NavContents = props => {
  const classes = useStyles();
  const locale = props.locale;

  const menuItemList = menuItems => {
    return <ul className={classes.list}>
      {menuItems.map(menuItem => (
        <li key={menuItem.text} className={classes.listItem}>
          <Divider />
          <Link href={`/${locale}/${menuItem.link}`}>
            <a className={classes.a}>
              <ListItem button className={classes.listItem}>
                  <ListItemText primary={menuItem.text} className={classes.text}/>
              </ListItem>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  }
  
  return (
    <div className={classes.navigation} id="navigation">
      <Link href="/">
        <div className={classes.logoContainer}>
          <Link href="/">
            <img className={classes.logo} src="/worley-digital-logo-dark.png" id="logo"  />
          </Link>
        </div>
      </Link>
      {menuItemList(menuItems)}
      <Divider />
      {/* <div className={classes.socialLogos}>
          <ul className={classes.socialsList}>
            {socialItems.map(socialItem => (
              <li className={classes.socialsListItem} key={socialItem.logoDark}>
                <a href={socialItem.link} target="_blank">
                  <img className={classes.socialLogo} src={socialLogo(props.menuColor, socialItem.logoLight, socialItem.logoDark)} />
                </a>
              </li>  
            ))}
          </ul>
      </div> */}
    </div>

  )
};

export default NavContents;