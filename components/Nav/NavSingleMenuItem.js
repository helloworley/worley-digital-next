import React from 'react'
import Link from 'next/link';

// style
import { makeStyles } from '@material-ui/core/styles';

// translation
import { LocaleContext } from '../../context/LocaleContext';
import useTranslation from '../../hooks/useTranslation';

const useStyles = makeStyles(theme => ({
  a: {
    listStyle: 'none',
    padding: '6px 0',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    '&:hover': {
      color: 'rgba(255,255,255,.7)',
    }
  },
}));

const NavSingleMenuItem = props => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);
  
  return (
    <Link href={`/${locale}${props.menuItem.link}`}>
      <a className={classes.a}>
        {t(props.menuItem.name)}
      </a>
    </Link>
  )
};

export default NavSingleMenuItem;
