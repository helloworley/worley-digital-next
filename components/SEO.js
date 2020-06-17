// react
import React from 'react';
import { NextSeo } from 'next-seo';

// translation
import { LocaleContext } from '../context/LocaleContext';
import switchText from '../helpers/switchText';



const SEO = props => {
  const { locale } = React.useContext(LocaleContext);

  return(  
    <NextSeo
      title="Worley Digital"
      description="A short description goes here."
      openGraph={{
        url: `https://www.worleydigital.com/${locale}/${props.slug}`,
        title: `${switchText(locale, props.titleEn, props.titleJa)}`,
        description: `${switchText(locale, props.descriptionEn, props.descriptionJa)}`,
        images: [
          {
            url: props.image,
            width: 1200,
            height: 675,
            alt: `${switchText(locale, props.descriptionEn, props.descriptionJa)}`,
          },
        ],
        site_name: 'Worley Digital',
      }}
      twitter={{
        // handle: '@handle',
        // site: '@site',
        cardType: 'summary_large_image',
      }}
    />
    
  )};

export default SEO;

