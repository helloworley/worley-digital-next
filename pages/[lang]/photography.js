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
import Gallery from '../../components/Layout/Gallery';
import SEO from '../../components/SEO.js';
import ContentfulToHTML from '../../components/ContentfulToHTML';
import SectionHeading from '../../components/Layout/SectionHeading';


// data
import pageData from '../../data/pagePhotography.json';
const bgImage = pageData.heroBackground.en.fields.file.en.url;
const titleEn = pageData.title.en;
const titleJa = pageData.title.ja;
const pageSubtitleEn = pageData.subtitle.en;
const pageSubtitleJa = pageData.subtitle.ja;


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
    backgroundColor: '#4d4d4d',
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
    <>
      <SEO
        titleEn={pageData.seo.en.fields.title.en}
        titleJa={pageData.seo.en.fields.title.ja}
        descriptionEn={pageData.seo.en.fields.description.en}
        descriptionJa={pageData.seo.en.fields.description.ja}
        slug={pageData.seo.en.fields.slug ? pageData.seo.en.fields.slug.en : ''}
        image={pageData.seo.en.fields.image.en.fields.file.en.url}
      />
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
          <ContentfulToHTML dataEn={pageData.content.en.content} dataJa={pageData.content.ja.content}/>
        </div>

        <SectionHeading titleEn="Gallery" titleJa="ギャラリー" />

        <Gallery elements={pageData.images.en} />
      </Layout>
    </>
  )};



export default withLocale(Index);