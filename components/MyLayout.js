
import { Grid, Hidden } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// custom
import NavMobile from './Nav/NavMobile';
import NavDesktop from './Nav/NavDesktop';
import ContactFormWrapper from './Form/ContactFormWrapper';

// translation
import useTranslation from '../hooks/useTranslation';
import { LocaleContext } from '../context/LocaleContext';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridContainerCustomizations: {
    width: '100%',
  },
  root: {
    flexGrow: 1,
    paddingBottom: '0 !important'
  },
  content: {
    width: '100%',
  },
  rightPannel: {
    overflow: 'auto',
    padding: '120px 0 0',
    [theme.breakpoints.up('md')]: {
      padding: '108px 0 0',
      height: '100vh',
    },
  },
  normalizeGridItem: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important'
  },
}));

const Layout = props => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { locale } = React.useContext(LocaleContext)

  return (
    <>
      <Hidden smUp>
        <NavMobile locale={locale} />
      </Hidden>

      <div className={classes.root}>
        
        <Hidden xsDown>
          <NavDesktop 
            menuColor={props.menuColor} 
            locale={props.locale}  
            toggleContactForm={props.toggleContactForm} 
          />
        </Hidden>
        
        <ContactFormWrapper 
          contactOpen={props.contactOpen}
          toggleContactForm={props.toggleContactForm} 
        />

        <div className={classes.content}>
          {props.children}
        </div>        

      </div>
      </>
  );
}


export default Layout;