// react
import React from 'react'

// material ui
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// translation
import { LocaleContext } from '../../context/LocaleContext';

const useStyles = makeStyles(theme => ({
  WebsiteTechCard: {
    padding: '24px 32px 32px',
    boxShadow: theme.shadows[5],
    borderRadius: '4px',
  },
  heading: {
    marginTop: '0',
    fontSize: '1.3em',
    color: '#9B9B9B',
  },
  icon: {
    height: '56px',
    margin: '0 !important',
    // [theme.breakpoints.up('sm')]: {
    //   height: '64px',
    // },
    // [theme.breakpoints.up('md')]: {
    //   margin: '0 0 24px !important',
    // },
    width: 'auto',
  },
  TechCardTech: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    margin: '0 0 0 16px',
    fontWeight: 'bold',
    fontSize: '1.2em',
    color: '#4d4d4d'
  },
  link: {
    textDecoration: 'none',
  }
}));



const WebsiteTechCard = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);

  return(  
    <a href={props.link} target="_blank" className={classes.link}>
      <div className={classes.WebsiteTechCard}>
        <h4 className={classes.heading}>{props.type}</h4>
        <div className={classes.TechCardTech}>
          <img src={props.icon} className={classes.icon}/>
          <p className={classes.text}>{props.text}</p>
        </div>
      </div>
    </a>
  )};

export default WebsiteTechCard;