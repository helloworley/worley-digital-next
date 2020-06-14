// react
import React from 'react'

// material ui
import { Grid, Button, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// next
import Link from 'next/link';

// translation
import useTranslation from '../../hooks/useTranslation';
import withLocale from '../../hocs/withLocale';
import { LocaleContext } from '../../context/LocaleContext';

// custom
import Layout from '../../components/MyLayout';
import Hero from '../../components/Layout/Hero';
import ContentfulToHTML from '../../components/ContentfulToHTML';
import ProjectSelector from '../../components/Layout/ProjectSelector';
import PastProjectsHeading from '../../components/Layout/PastProjectsHeading';


// data
import pageData from '../../data/pageBranding.json';
import projectPkamasa from '../../data/brandingExample-pkmasa.json';
import projectPtengine from '../../data/brandingExample-ptengine.json';
import projectMango from '../../data/brandingExample-mangofactory.json';
import projectVtap from '../../data/brandingExample-vtap.json';

const projects = [
  projectPkamasa,
  projectPtengine,
  projectMango,
  projectVtap
]


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


const Index = props => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { locale } = React.useContext(LocaleContext)

  const title = 'branding';
  const subtitle = 'homeFeatureSubtitle';
  const buttonText = 'homeFeatureButtonText';

  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }

  console.log('page data', pageData);

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
          <ContentfulToHTML dataEn={pageData.content.en.content} dataJa={pageData.content.ja.content}/>
        </div>

        <div className={classes.contentContainer}>
          <PastProjectsHeading />
          <ProjectSelector projects={projects} />
        </div>

      </div>
      
        
        
    </Layout>
  )};



export default withLocale(Index);