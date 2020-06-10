// react
import React from 'react'

// material ui
import { Button, Typography, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// next
import Link from 'next/link';

// translation
import { LocaleContext } from '../../context/LocaleContext';

const useStyles = makeStyles(theme => ({
  projectCard: {
    margin: '0',
  },
  projectCardBackground: {
    width: '100%',
    height: '64px',
    margin: '0',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
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
    margin: '8px 0',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
}));



const ProjectCard = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);


  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }

  const checkSelected = selected => {
    return selected ? '1' : '.1';
  }

  const projectCardStyle = { 
    backgroundImage: `url(${props.image})`,
    opacity: checkSelected(props.selected),
  }

  const textStyle = {
    opacity: checkSelected(props.selected),
  }

  return(  
    <div 
      className={classes.projectCard}
      onClick={() => props.showProject(props.data)}
    >
      <div 
        className={classes.projectCardBackground} 
        style={projectCardStyle}
      ></div>
      <p style={textStyle} className={classes.text}>{props.title}</p>
    </div>
  )};

export default ProjectCard;