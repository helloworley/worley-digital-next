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
import ServicesOffered from '../../components/Layout/ServicesOffered';
import ServiceSelectTabBar from '../../components/Layout/ServiceSelectTabBar';
import ProjectSelector from '../../components/Layout/ProjectSelector';
import ContentfulToHTML from '../../components/ContentfulToHTML';
import MktServicesOffered from '../../components/Marketing/MktServicesOffered';
import CallToActionSection from '../../components/Layout/CallToActionSection';


// data
import pageData from '../../data/pageMarketing.json';
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
    maxWidth: '1260px',
    margin: '0 auto',
  },
  centeredWrapper: {
    textAlign: 'center',
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

  console.log('page data', pageData)

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

      <div className={classes.centeredWrapper}>
        <ContentfulToHTML dataEn={pageData.pageContent.en.content} dataJa={pageData.pageContent.ja.content}/>
      </div>

      <MktServicesOffered servicesOffered={pageData.servicesOffered.en} />

      <CallToActionSection 
        text={pageData.callToAction} 
        toggleContactForm={props.toggleContactForm} 
      />
        
    </Layout>
  )};



export default withLocale(Index);