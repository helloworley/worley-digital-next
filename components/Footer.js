import React from 'react';

// material ui
import { Grid, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// translation
import { LocaleContext } from '../context/LocaleContext';

// next
import Link from 'next/link';

// custom
import switchText from '../helpers/switchText';

// styles 
const useStyles = makeStyles(theme => ({
  Footer: {
    backgroundColor: '#F5EBEB',
    padding: '64px 0',
    [theme.breakpoints.up('sm')]: {
      padding: '80px 0 48px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '80px 40px 48px',
    },
    // '& p': {
    //   color: '#616161',
    //   fontFamily: 'Lato,"Helvetica Neue",Arial,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    //   fontWeight: '500',
    //   lineHeight: '1.8',
    //   margin: '0 0 32px',
    //   fontSize: '1em',
    // }
  },
  colHeading: {
    color: '#A59A9A',
    margin: '0 0 12px',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  wrapper: {
    padding: '0 8% 0',
    [theme.breakpoints.up('sm')]: {
      // padding: '8% 8% 80px',
    },
    [theme.breakpoints.up('md')]: {  
      maxWidth: "1260px",
      margin: '0 auto',
      padding: '0'
    }
  },
  logo: {
    maxWidth: '200px',
  },
  logoWrapper: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'initial',
    },
  },
  linkText: {
    cursor: 'pointer',
    '&:hover': {
      color: '#A59A9A',
    }
  },
  socials: {
    margin: '16px 0 40px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'initial',
    },
  },
  icon: {
    margin: '0 16px 0 0',
  },
  copyright: {
    color: '#A59A9A',
    textAlign: 'center',
    margin: '56px 0 0',
    [theme.breakpoints.up('md')]: {
      textAlign: 'initial',
      margin: '0',
    },
  },
  col3: {
    margin: '16px 0 0',
    [theme.breakpoints.up('sm')]: {
      margin: '0',
    },
  },
  link: {
    textDecoration: 'none',
  }
}));

const col2Items = [
  {
    textEn: 'About',
    textJa: 'WDについて',
    link: 'about'
  }
];

const col3Items = [
  {
    textEn: 'Branding',
    textJa: 'ブランディング',
    link: 'branding'
  },
  {
    textEn: 'Marketing',
    textJa: 'マーケティング',
    link: 'marketing'
  },
  {
    textEn: 'UI UX Design',
    textJa: 'UI UX デザイン',
    link: 'ui-ux-design'
  },
  {
    textEn: 'Website Creation',
    textJa: 'ウェブサイト作成',
    link: 'website-creation'
  },
  {
    textEn: 'Photography',
    textJa: 'フォトグラフィ',
    link: 'photography'
  },
];

const socialIcons = [
  {
    link: 'https://www.linkedin.com/in/joshua-worley/',
    img: '/linkedin.svg',
    alt: 'Josh Worley LinkedIn'
  },
  {
    link: 'https://www.instagram.com/jshwrly/?hl=en',
    img: '/instagram.svg',
    alt: 'Josh Worley Instagram'
  },
  {
    link: 'https://github.com/helloworley',
    img: '/github.svg',
    alt: 'Josh Worley Github'
  }
]

const Footer = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);

  const createLinks = items => {
     return items.map((item, i) => {
      return <Link href={`/${locale}/${item.link}`} key={i}>
        <Typography className={classes.linkText}>
          {switchText(locale, item.textEn, item.textJa)}
        </Typography>
      </Link>
    })
  };

  const createSocials = items => {
    return items.map((item, i) => {
      return <a href={item.link} key={i} target="_blank" rel="noreferrer">
        <img src={item.img} alt={item.alt} className={classes.icon} />
      </a>
    });
  }

  return(
    <div className={classes.Footer}>
      <div className={classes.wrapper}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <div className={classes.logoWrapper}>
              <img src="/worley-digital-logo-gray.png" alt="Worley Digital Logo" className={classes.logo} />
            </div>
            <div className={classes.socials}>
              {createSocials(socialIcons)}
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h4" className={classes.colHeading}>
              Information
            </Typography>
            {createLinks(col2Items)}
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h4" className={classes.colHeading}>
              Services
            </Typography>
            {createLinks(col3Items)}
          </Grid>
          <Grid item xs={12} sm={4} md={3} className={classes.col3}>
            <Typography variant="h4" className={classes.colHeading}>
              Contact
            </Typography>
            <a href="mailto:worleydigital@gmail.com" className={classes.link}>
              <Typography className={classes.linkText}>
                worleydigital@gmail.com
              </Typography>
            </a>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.copyright}> 
              Copyright 2020 Worley Digital. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
};

export default Footer;