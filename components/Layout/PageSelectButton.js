// react
import React from 'react'

// material ui
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';

// translation
import { LocaleContext } from '../../context/LocaleContext';

const useStyles = makeStyles(theme => ({
  PageSelectButton: {
    margin: '0',
  },
  PageSelectButtonBackground: {
    width: '100%',
    height: '64px',
    margin: '0',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    backgroundColor: '#F5EBEB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: '.5',
    boxShadow: theme.shadows[2],
    '&:hover': {
      boxShadow: theme.shadows[5],
    },
    [theme.breakpoints.up('sm')]: {
      height: '80px',
    },
    [theme.breakpoints.up('md')]: {
      height: '120px',
    },
  },
  text: {
    fontSize: '.9em',
    margin: '0',
    fontWeight: 'bold',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.2em',
    },
  }
}));



const PageSelectButton = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);


  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }

  const checkSelected = selected => {
    return selected ? '1' : '.4';
  }

  const PageSelectButtonStyle = { 
    // backgroundImage: `url(${props.image})`,
    opacity: checkSelected(props.selected),
  }

  const textStyle = {
    opacity: checkSelected(props.selected),
  }

  return(  
    <div 
      className={classes.PageSelectButton}
      onClick={() => props.showSection(props.titleEn)}
    >
      <div className={classes.PageSelectButtonBackground} style={PageSelectButtonStyle}>
        <Typography variant="h4" className={classes.text}>{switchText(props.titleEn, props.titleJa)}</Typography>
      </div>
      
    </div>
  )};

export default PageSelectButton;