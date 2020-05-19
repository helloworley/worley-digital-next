import React from 'react'
import Link from 'next/link';

// style
import { makeStyles } from '@material-ui/core/styles';

// translation
import useTranslation from '../../hooks/useTranslation';

const useStyles = makeStyles(theme => ({
  item: {
    listStyle: 'none',
    padding: '6px 0',
    margin: '10px 30px 0 0',
  },
  contactTrigger: {
    listStyle: 'none',
    cursor: 'pointer',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    margin: '0',
    '&:hover': {
      color: 'rgba(255,255,255,.7)',
    },
  },
}));

const NavItemToggleContact = props => {
  const { t } = useTranslation();
  const classes = useStyles();
  
  return (
    <li className={classes.item} onClick={props.toggleContactForm}>
      <p className={classes.contactTrigger}>
        {t('contact')}
      </p>
    </li>
  )
};

export default NavItemToggleContact;
