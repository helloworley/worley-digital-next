import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core/';

// custom
import Footer from '../components/Footer';
import Layout from '../components/MyLayout';
import BubbleWindow from '../components/BubbleWindow';

// data
import servicesOffered from '../data/servicesOffered';

// assets
const bgImage = '/triangle-backdrop.svg';


const styles = theme => ({
  root: {
    textAlign: 'center',
    overflowX: 'hidden',
  },
  h1: {
  },
  section: {
    margin: '120px 0 0',
  },
  bubbleWindowsSection: {
    textAlign: 'center',
  },
  h2: {
    fontSize: '1.2em',
    [theme.breakpoints.up('md')]: {
      fontSize: '2em',
    }
  },
  logo: {
    maxWidth: '120px',
    margin: '0 0 8px',
  },
  wrapper: {
    backgroundImage: `url(${bgImage})`,
    flexGrow: 1,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    padding: '0 24px',
    [theme.breakpoints.up('sm')]: {
      padding: '0 40px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundSize: 'cover',
      height: '90vh',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0',
    }
  },
  contentContainer: {
    maxWidth: '1260px',
    margin: '0 auto',
  },
  centeredWrapper: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    },
  },
});

const BubbleWindows = servicesOffered.map( serviceOffered => {
  return (
    <Grid item xs={6} sm={4}>
      <BubbleWindow text={serviceOffered.en} bg={serviceOffered.image}/>
    </Grid>
  )
});




  class Index extends React.Component {
    render() {
      const { classes } = this.props;
      return (
        <Layout>
          <Grid className={classes.wrapper} container>
            <Grid container className={classes.contentContainer} spacing={2}>
              <Grid item xs={12} md={6}>
                <div className={classes.section}>
                  <Typography variant="h1" className={classes.h1} gutterBottom>
                    Your creative friend in the digital future.
                  </Typography>
                  <Typography variant="subtitle1">
                    Worley Digital provides professional digital consulting and creative services to supercharge your business growth.
                  </Typography>
                  <Button variant="contained" color="primary">
                    Contact
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={`${classes.section} ${classes.bubbleWindowsSection}`}>
                  <Typography variant="h2">
                    What do you need help with?
                  </Typography>
                  <Grid container spacing={3}>
                    {BubbleWindows}
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Layout>
        
      );
    }
  }



  export default withStyles(styles)(Index);