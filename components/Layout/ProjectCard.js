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
    width: '100%',
    height: '160px',
    margin: '0 0 24px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
}));



const ProjectCard = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);

  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }

  const projectCardStyle = { 
    backgroundImage: `url(${props.image})`,
  }

  return(  
    <div 
      className={classes.projectCard} 
      onClick={() => props.showProject(props.data)}
      style={projectCardStyle}
    >
      <h2>{props.title}</h2>
    </div>
  )};

export default ProjectCard;