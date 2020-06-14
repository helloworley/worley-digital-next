// react
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';


// material ui
import { Paper, Tabs, Tab, Box, Typography } from '@material-ui/core/';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// translation
import withLocale from '../../hocs/withLocale';
import { LocaleContext } from '../../context/LocaleContext';

// custom
import Layout from '../../components/MyLayout';
import Hero from '../../components/Layout/Hero';
import ContentfulToHTML from '../../components/ContentfulToHTML';
import CallToActionSection from '../../components/Layout/CallToActionSection';
import WebsiteProjectSelector from '../../components/Layout/WebsiteProjectSelector';
import PastProjectsHeading from '../../components/Layout/PastProjectsHeading';


// data
import pageData from '../../data/pageWebsiteCreation.json';
import projectLK from '../../data/websiteProject-lighthousekanata.json';
import projectWD from '../../data/websiteProject-worleydigital.json';
import projectS from '../../data/websiteProject-sirup.json';
import projectPKM from '../../data/websiteProject-pkmasa.json';
import projectPt from '../../data/websiteProject-ptengine.json';

const projects = [
  projectWD,
  projectLK,
  projectPt,
  projectPKM,
  projectS
]

console.log('projects', projects)

const bgImage = pageData.heroBackground.en.fields.file.en.url;
const titleEn = pageData.pageTitle.en;
const titleJa = pageData.pageTitle.ja;
const pageSubtitleEn = pageData.pageSubtitle.en;
const pageSubtitleJa = pageData.pageSubtitle.ja;

const useStyles = makeStyles(theme => ({
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
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0',
    }
  },
  contentContainer: {
    textAlign: 'center',
    padding: '0 32px',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      padding: '0 32px',
    },
    maxWidth: '1260px',
    margin: '80px auto',
    '& img': {
      margin: '40px 0'
    },
    '& p': {
      textAlign: 'left',
    }
  },
  centeredWrapper: {
    // textAlign: 'center',
    padding: '0 32px',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      padding: '0 32px',
    },
    maxWidth: '800px',
    margin: '80px auto',
    '& img': {
      margin: '40px 0'
    },
    '& p': {
      textAlign: 'left',
    }
  },
  pageContent: {
    '& img': {
      margin: '56px 0 24px'
    },
    '& p': {
      textAlign: 'left',
      lineHeight: '1.8'
    },
    // text styles
    '& li': {
      '& p': {
        margin: '0'
      }
    },
    '& h2': {
      margin: '56px 0 16px'
    },
    '& h3': {
      margin: '40px 0 16px'
    }
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const Index = props => {
  const classes = useStyles();
  const theme = useTheme();
  const { locale } = React.useContext(LocaleContext)
  const buttonText = 'homeFeatureButtonText';
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }


  return(
    <Layout
      locale={locale}
      toggleContactForm={props.toggleContactForm} 
      toggleServicesHovered={props.toggleServicesHovered}
      servicesHovered={props.servicesHovered}
      contactOpen={props.contactOpen}
    >
      <Hero 
        title={ switchText( titleEn, titleJa ) }
        subtitle={ switchText( pageSubtitleEn, pageSubtitleJa ) }
        buttonText={buttonText}
        toggleContactForm={props.toggleContactForm} 
        bgImage={bgImage}
      />

      <div className={classes.pageContent}> 
        
        <div className={classes.centeredWrapper}>
          <ContentfulToHTML dataEn={pageData.pageContent.en.content} dataJa={pageData.pageContent.ja.content}/>
        </div>
      
        <div className={classes.contentContainer}>
          <PastProjectsHeading />
          <WebsiteProjectSelector projects={projects} />
        </div>
        
      </div>
    

      <CallToActionSection 
        text={pageData.callToAction} 
        toggleContactForm={props.toggleContactForm} 
      />
        
    </Layout>
  )};



export default withLocale(Index);