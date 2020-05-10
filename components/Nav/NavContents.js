import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import navItems from '../../data/navItems';
import navSocials from '../../data/navSocials';

const menuItems = navItems;
const socialItems = navSocials;


const useStyles = makeStyles({
  navigation: {
    padding: '32px',
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
    maxWidth: '80px',
    margin: '0 0 4px',
  },
  a: {
    listStyle: 'none',
    padding: '6px 0',
    color: '#333',
  }
});

const getSingleMenuItem = (menuItem, menuColor, locale) => {
  const classes = useStyles();
  return (
    <Link href={`/${locale}${menuItem.link}`}>
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

function socialLogo(color, lightLogo, darkLogo) {
  if (color == '#fff') {
    return lightLogo;
  }
  return darkLogo;
}

const NavContents = props => {
  const classes = useStyles();
  return (
    <div className={classes.navigation} id="navigation">
      <Link href="/">
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={logo(props.menuColor)} />
          <Link href="/">
            <Typography style={{color: props.menuColor}}> Joshua Worley</Typography>
          </Link>
        </div>
      </Link>
      <ul className={classes.list}>
        {menuItems.map(menuItem => (
          <li key={menuItem.name} className={classes.listItem}>
            {menuItem.children ? getMenuChildren(menuItem.name, menuItem.children, props.menuColor) : getSingleMenuItem(menuItem, props.menuColor, props.locale)}
          </li>
        ))}
      </ul>
      <div className={classes.socialLogos}>
          <ul className={classes.socialsList}>
            {socialItems.map(socialItem => (
              <li className={classes.socialsListItem} key={socialItem.logoDark}>
                <a href={socialItem.link} target="_blank">
                  <img className={classes.socialLogo} src={socialLogo(props.menuColor, socialItem.logoLight, socialItem.logoDark)} />
                </a>
              </li>  
            ))}
          </ul>
      </div>
    </div>

  )
};

export default NavContents;