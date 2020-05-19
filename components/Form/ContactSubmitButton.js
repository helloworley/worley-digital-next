import React from 'react';

// custom
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

// material
import { Button } from '@material-ui/core/';

// translation
import useTranslation from '../../hooks/useTranslation';

const useStyles = makeStyles(theme => ({
  submitButtonWrapper: {
    textAlign: 'center',
    margin: '0',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    }
  },
  sendIcon: {
    margin: '-3px 0 0 8px',
    transform: 'rotate(-45deg)',
    fontSize: '18px',
  },
  submitButton: {
    fontStyle: 'normal',
  }
}));


const ContactSubmitButton = props => {
  const classes = useStyles();
  const { t } = useTranslation();

  return(
    <div className={classes.submitButtonWrapper}>
      <Button className={classes.submitButton} variant="contained" type="submit" label="Submit" color="primary" value="Send">
        {t('contact')}
        <SendIcon className={classes.sendIcon} />
      </Button>
    </div>
  )
};

export default ContactSubmitButton;