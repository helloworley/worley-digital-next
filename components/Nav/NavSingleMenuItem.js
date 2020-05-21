import React from 'react'
import Link from 'next/link';

// style
import { makeStyles } from '@material-ui/core/styles';

// custom 
import NavDropDown from './NavDropDown';

// translation
import { LocaleContext } from '../../context/LocaleContext';
import useTranslation from '../../hooks/useTranslation';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
  },
  linkInner: {
    padding: '40px 30px',
    color: '#fff',
    fontWeight: 'bold',
    listStyle: 'none',
    '&:hover': {
      color: 'rgba(255,255,255,.7)',
    }
  },
  aDropDown: {
    backgroundColor: '#fff',
  },
  textAndDropDown: {
    position: 'relative',
  },
  dropDown: {
    position: 'absolute',
    right: '0',
    top: '100px',
  },
  textAndDropDownText: {
    cursor: 'pointer',
    color: '#5B5B5B',
  }
}));

const NavSingleMenuItem = props => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);

  const singleLink = (
    <Link href={`/${locale}/${props.link}`}>
      <a className={classes.link}>
        <div className={classes.linkInner}>
          {t(props.name)}
        </div>
      </a>
    </Link>
  );

  const textAndDropDown = (
    <div className={classes.textAndDropDown}>
      <div className={`${classes.aDropDown}`}>
        <div className={`${classes.textAndDropDownText} ${classes.linkInner}`}>
          {t(props.name)}
        </div>
      </div>
      <div className={classes.dropDown}>
        <NavDropDown dropDownItems={props.dropDownItems}/>
      </div>
    </div>
  );
  
  return (
    <>
    { props.dropDownItems ? textAndDropDown : singleLink }
    </>
  )
};

export default NavSingleMenuItem;
