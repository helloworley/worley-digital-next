import React from 'react'
import Link from 'next/link';

// style
import { makeStyles } from '@material-ui/core/styles';

// translation
import useTranslation from '../../hooks/useTranslation';

const useStyles = makeStyles(theme => ({
  item: {
    listStyle: 'none',
  },
  contactTrigger: {
    listStyle: 'none',
    cursor: 'pointer',
    padding: '40px 30px',
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
