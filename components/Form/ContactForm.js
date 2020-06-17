import React, { useEffect } from 'react';

// material
import { 
  Typography, 
  Grid, 
  Checkbox, 
  TextField,
  FormGroup,
  FormControlLabel,
  Button
  } from '@material-ui/core/';
  import { makeStyles } from '@material-ui/core/styles';


// custom
import ContactSubmitButton from './ContactSubmitButton';

// translation
import useTranslation from '../../hooks/useTranslation';


const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'auto',
  },
  radio: {
    display: 'flex',
  },
  contactTitle: {
    margin: '0 0 24px',
  },
  contactSubtitle: {
    margin: '0 0 24px',
  },
  contactIntro: {
    margin: '0 0 24px',
  },
  checkBoxes: {
    margin: '0 0 40px'
  },
  inputWrapper: {
    maxWidth: '100%',
    margin: '0 0 40px',
    [theme.breakpoints.up('sm')]: {
      padding: '0 32px 0 0',
    }
  },
  buttonWrapper: {
    margin: '64px 0 0'
  },
  normalizeGridItem: {
    padding: '0 !important'
  },
  input: {
    margin: '0'
  },
  closeButton: {
    fontStyle: 'normal',
    fontWeight: 'bold',
  }
}));


const ContactForm = props => {
  const classes = useStyles();
  const { t } = useTranslation();

  // React hook set state
  const [state, setState] = React.useState({
    displaySubmit: true,
  });

  const checkCheckBox = id => {
    const checkChecked = document.getElementById(id).checked;
    return checkChecked ? '√' : '';
  }

  const getData = () => {
    const formData = {
      branding: checkCheckBox('branding'),
      photography: checkCheckBox('photography'),
      marketing: checkCheckBox('marketing'),
      uxDesign: checkCheckBox('uxDesign'),
      uiDesign: checkCheckBox('uiDesign'),
      websiteCreation: checkCheckBox('websiteCreation'),
      other: checkCheckBox('other'),
      name: document.getElementById('name').value,
      company: document.getElementById('company').value,
      email: document.getElementById('email').value,
      inquiry: document.getElementById('inquiry').value,
    }
    return formData;
  }

  // React Hook for Component Did Mount functionality
  // effects run after every completed render
  useEffect(() => {
    const theForm = document.getElementById('contact-form');
    waitForForm(theForm);
  }, []);

  const waitForForm = form => {
    if(typeof form !== 'undefined') {
      addSubmitListener(form);
    } else {
      waitForForm(document.getElementById('contact-form'));
    }
  }

  const addSubmitListener = theForm => {
    // console.log('add listener');

    theForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = getData();
      // console.log('form data', formData);
      let submitStatus = 'PENDING';
      fetch(`https://usebasin.com/f/b3b2da236c0c.json`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'content-type': 'application/json'
        }
      }).then(res => {
        res
          .json()
          .then(data => {
              state.messageSent = data.success;
              setState({
                ...state,
                displaySubmit: false,
              });
          });
      });
      setTimeout(() => {
        submitStatus = 'OK'
      }, 500)

    });
  }

  const thankYouMessage = props => {
    return (
      <>
        <p>{t('contactThankYou')}</p>
        <Button className={classes.closeButton} variant="contained" type="submit" label="Submit" color="primary" onClick={props.toggleContactForm}>
          {t('returnToSite')}
        </Button>
      </>
    )
  };
    
  return (
    <form
      className={classes.root}
      noValidate
      id="contact-form"
      autoComplete="off"
      // onSubmit={this.handleSubmit()}
      >
        <div className={classes.contactForm}>
          <Typography variant="h2" className={`${classes.contactSubtitle}`}>
            {t('contactSubtitle')}
          </Typography>
        </div>

        <Grid className={classes.root}>
          <Grid xs={12} item className={classes.normalizeGridItem}>

            {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
            <FormGroup className={classes.checkBoxes}>
              <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControlLabel
                    className={classes.radio}
                    control={<Checkbox color="primary" name="branding" id="branding"/>}
                    label={t('branding')}
                  />
                  <FormControlLabel
                    className={classes.radio}
                    control={<Checkbox color="primary" name="photography" id="photography"/>}
                    label={t('photography')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControlLabel
                    className={classes.radio}
                    control={<Checkbox color="primary" name="marketing" id="marketing"/>}
                    label={t('snsMarketing')}
                  />
                  <FormControlLabel
                    className={classes.radio}
                    control={<Checkbox color="primary" name="uxDesign" id="uxDesign"/>}
                    label={t('uxDesign')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  
                  <FormControlLabel
                    className={classes.radio}
                    control={<Checkbox color="primary" name="uiDesign" id="uiDesign"/>}
                    label={t('uiDesign')}
                  />
                  <FormControlLabel
                    className={classes.radio}
                    control={<Checkbox color="primary" name="websiteCreation" id="websiteCreation"/>}
                    label={t('websiteCreation')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControlLabel
                    className={classes.radio}
                    control={<Checkbox color="primary" name="other" id="other"/>}
                    label={t('other')}
                  />
                </Grid>
              </Grid>

             
              
            </FormGroup>

            <Grid container>
              <Grid item xs={12} sm={6}>

                <div className={classes.inputWrapper}>
                  <TextField 
                    id="name" 
                    fullWidth
                    label={t('contactWhatsName')}
                    placeholder={t('contactNamePlaceholder')}
                    className={classes.input}
                    variant="outlined" 
                  />
                </div>

                <div className={classes.inputWrapper}>
                  <TextField 
                    id="company" 
                    fullWidth
                    label={t('contactWhatsCompany')}
                    placeholder={t('contactCompanyPlaceholder')}
                    className={classes.input}
                    variant="outlined" 
                  />
                </div>

                <div className={classes.inputWrapper}>
                  <TextField 
                    id="email"
                    fullWidth
                    label={t('contactWhatsEmail')}
                    placeholder={t('contactEmailPlaceholder')}
                    variant="outlined" 
                  />
                </div>

              </Grid>

              <Grid item xs={12} sm={6}>

              <div className={classes.inputWrapper}>
                  <TextField 
                    id="inquiry"
                    multiline
                    rows={4}
                    fullWidth
                    label={t('contactWhatsInguiry')}
                    placeholder={t('contactInquiryPlaceholder')}
                    variant="outlined" 
                  />
                </div>

                { state.displaySubmit ? <ContactSubmitButton /> : thankYouMessage(props) }

                
              </Grid>
            </Grid>
          


          </Grid>
        </Grid>
        

    </form>
  );
};


export default ContactForm;