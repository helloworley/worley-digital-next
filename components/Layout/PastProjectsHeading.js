// react
import React from 'react'

// custom
import { makeStyles } from '@material-ui/core/styles';

// translation
import { LocaleContext } from '../../context/LocaleContext';

const useStyles = makeStyles(theme => ({
  
  projectsTitle: {
    textAlign: 'center',
    padding: '64px 0 24px',
  },
  heading: {
    fontSize: '2.5em',
  }
}));



const PastProjectsHeading = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);

  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }

  return(  
    <div className={classes.projectsTitle}>
      <h1 className={classes.heading}>{switchText( 'Past Projects', '過去のプロジェクト' )}</h1>
    </div>
  )};

export default PastProjectsHeading;