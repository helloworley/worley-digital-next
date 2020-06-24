// react
import React from 'react'

// material
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';

// translation
import { LocaleContext } from '../../context/LocaleContext';

const useStyles = makeStyles(theme => ({
  
  projectsTitle: {
    textAlign: 'center',
    padding: '0 0 24px',
    [theme.breakpoints.up('sm')]: {
      padding: '64px 0 24px',
    }
  },
  heading: {
    fontSize: '1.5em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5em',
    }
  }
}));



const SectionHeading = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);

  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }

  return(  
    <div className={classes.projectsTitle}>
      <Typography variant="h1" className={classes.heading}>{switchText( props.titleEn, props.titleJa )}</Typography>
    </div>
  )};

export default SectionHeading;