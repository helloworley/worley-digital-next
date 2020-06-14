// react
import React from 'react'

// material ui
import { Grid, Button, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// translation
import useTranslation from '../../hooks/useTranslation';
import withLocale from '../../hocs/withLocale';
import { LocaleContext } from '../../context/LocaleContext';


// custom
import Layout from '../../components/MyLayout';
import Hero from '../../components/Layout/Hero';
import ServicesOffered from '../../components/Layout/ServicesOffered';


// data
import pageData from '../../data/pageIndex.json';
const bgImage = pageData.heroBackground.en.fields.file.en.url;
const titleEn = pageData.pageTitle.en;
const titleJa = pageData.pageTitle.ja;
const subtitleEn = pageData.pageSubtitle.en;
const subtitleJa = pageData.pageSubtitle.ja;
const servicesOffered = pageData.services.en;


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
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    },
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
  const { locale } = React.useContext(LocaleContext);

  const buttonText = 'homeFeatureButtonText';

  console.log('page data', pageData)

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
        subtitle={ switchText( subtitleEn, subtitleJa ) }
        buttonText={buttonText}
        toggleContactForm={props.toggleContactForm} 
        bgImage={bgImage}
      />
      <ServicesOffered
        title={switchText(pageData.servicesOfferedTitle.en, pageData.servicesOfferedTitle.ja)}
        subtitle={switchText(pageData.servicesOfferedSubtitle.en, pageData.servicesOfferedSubtitle.ja)}
        servicesOffered={servicesOffered}
        locale={locale}
      />
      <div className={classes.pageContent}>

      </div>
    </Layout>
  )};



export default withLocale(Index);