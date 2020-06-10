// react
import React from 'react'

// material ui
import { Button, Typography, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// custom
import MktgService from './MktgService';

// translation
import { LocaleContext } from '../../context/LocaleContext';

const useStyles = makeStyles(theme => ({
  MktServicesOffered: {
    width: '100%',
  },
  heading: {
    textAlign: 'center',
    margin: '0 0 80px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2em',
    }
  }
}));



const MktServicesOffered = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);

  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }

  console.log('services offered', props.servicesOffered)

  return(  
    <div className={classes.projectCard}>
      <Typography variant="h2" className={classes.heading}>
        Digital Marketing Services We Offer
      </Typography>

      <Grid container>
        {props.servicesOffered.map( (service, i) => {
          return <Grid item key={i} xs={12} sm={12} md={4}>
            <MktgService service={service} />
          </Grid>
        })}
      </Grid>
    </div>
  )};

export default MktServicesOffered;