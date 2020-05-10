
import { Grid, Hidden } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import NavMobile from './Nav/NavMobile';
import NavDesktop from './Nav/NavDesktop';

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

  return (
    <>
      <Hidden smUp>
        <NavMobile locale={props.locale} />
      </Hidden>

      <div className={classes.root}>
        
        <Hidden xsDown>
          <NavDesktop 
            menuColor={props.menuColor} 
            locale={props.locale}  
          />
        </Hidden>

        <div className={classes.content}>
          {props.children}
        </div>        

      </div>
      </>
  );
}


export default Layout;