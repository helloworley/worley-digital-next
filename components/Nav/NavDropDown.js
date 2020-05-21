import React from 'react'
import Link from 'next/link';

// style
import { makeStyles } from '@material-ui/core/styles';

// translation
import useTranslation from '../../hooks/useTranslation';
import { LocaleContext } from '../../context/LocaleContext';

const useStyles = makeStyles(theme => ({
  listItem: {
    listStyle: 'none',
    padding: '16px 40px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#F7F7F7'
    }
  },
  navDropDown: {
    backgroundColor: '#fff',
    margin: '0',
    padding: '0'
  },
  text: {
    padding: '0',
    margin: '0',
    minWidth: '160px'
  }
}));

const NavDropDown = props => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);
  
  return (
    <div>
      <ul className={classes.navDropDown}>
        {props.dropDownItems.map(item => {
          return <Link href={`${locale}/${item.link}`}>
            <li key={item.text} className={classes.listItem} onClick={props.toggleContactForm}>
              <p className={classes.text}>
                {t(item.text)}
              </p>
            </li>
          </Link>
        })}
      </ul>
    </div>
  )
};

export default NavDropDown;
