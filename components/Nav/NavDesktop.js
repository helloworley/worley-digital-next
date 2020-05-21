import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

import navItems from '../../data/navItems';
import navSocials from '../../data/navSocials';
import servicesOffered from '../../data/servicesOffered';

// custom
import LocaleSwitcher from '../LocaleSwitcher';
import NavSingleMenuItem from './NavSingleMenuItem';
import NavItemToggleContact from './NavItemToggleContact';

const menuItems = navItems;
const socialItems = navSocials;

// assets
const bgImage = '//worley-digital-logo.svg';

const styles = theme => createStyles({
  navigation: {
    padding: '0 40px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    height: '95px',
    position: 'fixed',
    top: '0',
    zIndex: '1000',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&.filled': {
      // backgroundColor: 'rgba(17,17,17,.7)',
      backgroundColor: '#5B5B5B',
      color: theme.palette.primary.main,
      boxShadow: theme.shadows[5],
      transition: 'background-color .3s ease-in-out, box-shadow .3s ease-in-out',
    },
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
    margin: '0 20px 0 0',
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
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'text',
  },
  logoContainer: {
    display: 'flex',
    minWidth: '200px',
  },
  logo: {
    color: 'text',
    cursor: 'pointer',
    maxWidth: '150px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '190px',
    },
    '&.shrunk': {
      maxWidth: '135px',
      transition: 'max-width .3s ease-in-out, box-shadow .3s ease-in-out',
    }
  },
  logoText: {
    lineHeight: '54px',
    margin: '0 0 0 8px',
    cursor: 'pointer',
  },
  navRight: {
    display: 'flex',
    alignItems: 'baseline',
  },
  langSwitcher: {
    float: 'right',
  }
});



class NavDesktop extends React.Component {

  state = {
    windowPosition: 0
  };

  // for gettting the scroll position and editing the background color for the nav
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  };

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
    const navigation = document.getElementById('navigation');
    this.state.windowPosition > 100 ? navigation.classList.add('filled') : navigation.classList.remove('filled');
    const logo = document.getElementById('logo');
    this.state.windowPosition > 100 ? logo.classList.add('shrunk') : logo.classList.remove('shrunk');
  };

  render() {
    const { classes, locale, topRef } = this.props;

    return(
      <div className={classes.navigation} id="navigation">
        <Link href="/">
          <div className={classes.logoContainer}>
            <img className={classes.logo} src="/worley-digital-logo.svg" id="logo" />
            {/* <Typography className={classes.logoText}>Worley Digital</Typography> */}
          </div>
        </Link>
        <div className={classes.navRight}>
          <ul className={classes.list}>
            
            
              <li className={classes.listItem}>
                 <NavSingleMenuItem name='about' link='/about' locale={locale} />
              </li>

              <li className={classes.listItem}>
                 <NavSingleMenuItem name='services' link='#' dropDownItems={servicesOffered} locale={locale} />
              </li>
            

            
              <NavItemToggleContact 
                locale={locale}  
                toggleContactForm={this.props.toggleContactForm} 
              />
            
          </ul>



          
          <LocaleSwitcher className={classes.langSwitcher} />
          {/* <div className={classes.socialLogos}>
              <ul className={classes.socialsList}>
                {socialItems.map(socialItem => (
                  <li className={classes.socialsListItem} key={socialItem.logoDark}>
                    <a href={socialItem.link} target="_blank">
                      <img className={classes.socialLogo} src={socialItem.logoDark}/>
                    </a>
                  </li>  
                ))}
              </ul>
          </div> */}
        </div>
      </div>

    )
  };
};

export default withStyles(styles)(NavDesktop);