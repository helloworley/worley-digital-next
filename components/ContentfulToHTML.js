import React from 'react';

// custom
import { makeStyles } from '@material-ui/core/styles';

// translation
import { LocaleContext } from '../context/LocaleContext';

// contentful
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// styles 
const useStyles = makeStyles(theme => ({
  ContentfulToHTML: {
    '& p': {
      color: '#616161',
      fontFamily: 'Lato,"Helvetica Neue",Arial,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: '500',
      lineHeight: '1.8',
      margin: '0 0 32px',
      fontSize: '1em',
    }
  },
}));

// documentToHtmlString doesn't return image embeds, so custom options are needed
let optionsEn = {
  renderNode: {
    'embedded-asset-block': (node) =>
      `<img style="max-width: 100%" src="${node.data.target.fields.file.en.url}"/>`
  }
}
// let bodyHTML = body ? documentToHtmlString(body, options) : ''

const ContentfulToHTML = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);

  const documentEn = {
    nodeType: 'document',
    content: props.dataEn,
  };

  const documentJa = {
    nodeType: 'document',
    content: props.dataJa,
  };

  function createMarkup() {
    if (locale == 'en') {
      return {__html: documentToHtmlString(documentEn, optionsEn)};
    } else {
      return {__html: documentToHtmlString(documentJa, optionsEn)};
    }
  }

  return(
    <div className={classes.ContentfulToHTML}>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
};

export default ContentfulToHTML;