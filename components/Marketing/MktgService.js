// react
import React from 'react'

// material ui
import { Button, Typography, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';


// translation
import { LocaleContext } from '../../context/LocaleContext';

const useStyles = makeStyles(theme => ({
  MktgService: {
    width: '100%',
    margin: '0 0 64px',
    textAlign: 'center',
  },
  mktgIcon: {
    margin: '0 0 24px',
    height: 'auto',
    width: '120px'
  },
  serviceSubList: {
    textAlign: 'center',
    margin: '0 0 32px',
    padding: '0',
    listStyle: 'none'
  },
  Subtitle: {
    margin: '0 auto 24px',
    maxWidth: '290px'
  },
  test: {
    width: '120px',
    height: '120px'
  }
}));



const MktgService = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);
  const fields = props.service.fields;

  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }

  const displayListItems = (itemsEn, itemsJa) => {
    let returnItems;
    if (locale == 'en') {
      returnItems = itemsEn.map( (item, i) => {
        return <li key={i}>
          <Typography>
            {item}
          </Typography>
        </li>
      });
    } else if (locale == 'ja') {
      returnItems = itemsJa.map( (item, i) => {
        return <li key={i}>
          <Typography>
            {item}
          </Typography>
        </li>
      });
    };
    return returnItems;
  };

  let icon;
  if (typeof fields.icon != 'undefined') {
    icon = fields.icon.en.fields.file.en.url;
  }

  return(  
    <div className={classes.MktgService}>
      <img src={icon} className={classes.mktgIcon}/>
      <Typography variant="h3" className={classes.Subtitle}>
        {switchText(fields.heading.en, fields.heading.ja)}
      </Typography>
      <ul className={classes.serviceSubList}>
        {displayListItems(fields.listItems.en, fields.listItems.ja)}
      </ul>
    </div>
  )};

export default MktgService;