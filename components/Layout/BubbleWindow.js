import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => createStyles({
  bubbleWindow: {
    cursor: 'pointer',
    color: '#A59A9A',
    '&:hover h4': {
      color: '#616161',
      transition: '.5s'
    },
    '&:hover div': {
      boxShadow: '0 10px 16px 0 rgba(0, 0, 0, 0.25)',
      transition: '.5s'
    },
  },
  image: {
    height: '120px',
    width: '120px',
    margin: '0 auto',
    backgroundColor: 'rgba(216, 216, 216, .4)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '50%',
    boxShadow: '0 10px 16px 0 rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.up('sm')]: {
      height: '180px',
      width: '180px',
    },
    [theme.breakpoints.up('md')]: {
      height: '140px',
      width: '140px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '180px',
      width: '180px',
    }
  },
  text: {
    textAlign: 'center',
    
   
  }
});

class BubbleWindow extends React.Component {
  render() {

    const { classes } = this.props;
    // console.log('props', this.props.bg)

    const imageStyle = {
      backgroundImage: `url("${this.props.bg}")`
    }

    return (
      <div className={classes.bubbleWindow}>
        <div className={classes.image} style={imageStyle}></div>
        <h4 className={classes.text}>{this.props.text}</h4>
      </div>
    )
  } 
}


export default withStyles(styles)(BubbleWindow);
