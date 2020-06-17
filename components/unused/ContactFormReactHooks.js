import React, { useEffect } from 'react';

// material
import { 
  Typography, 
  Grid, 
  Checkbox, 
  TextField,
  FormGroup,
  FormControlLabel,
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
}));


const ContactForm = props => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    // radio buttons
    branding: '',
    photography: '',
    marketing: '',
    uxDesign: '',
    uiDesign: '',
    websiteCreation: '',
    other: '',
    // text inputs
    name: '',
    email: '',
    company: '',
    inquiry: '',
    // logic
    displaySubmit: true
});


// handle changes
const handleChangeCheckbox = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked });
  // console.log('new state', state)
};

const handleChangeInput = prop => (event) => {
  setState({ ...state, [prop]: event.target.value});
  // console.log('new state', state)
};

// create variables
const { branding, photography, marketing, uxDesign, uiDesign, websiteCreation, other, name, email, company, inquiry } = state;

// translation
const { t } = useTranslation();
// const { locale } = React.useContext(LocaleContext)


// form logic 
const getData = () => {
  // console.log('branding', branding)
  // console.log('state.branding', state.branding)
  // console.log('branding value', document.getElementById('branding').checked)
  // console.log('name value', document.getElementById('name').value)
  const formData = {
    branding: document.getElementById('branding').value,
    photography: state.photography,
    marketing: state.marketing,
    uxDesign: state.uxDesign,
    uiDesign: state.uiDesign,
    websiteCreation: state.websiteCreation,
    other: state.other,
    // text inputs
    name: state.name,
    email: state.email,
    company: state.company,
    inquiry: state.inquiry,
  }
  // console.log('getting data')
  // console.log('state', state)
  // console.log('form data', formData);
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






  const thankYouMessage = <p>Thank you for your message! I'll get back to you as soon as I can :)</p>;
    
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
                    control={<Checkbox onChange={handleChangeCheckbox} color="primary" name="branding" id="branding"/>}
                    label={t('branding')}
                  />
                  <FormControlLabel
                    className={classes.radio}
                    control={<Checkbox  onChange={handleChangeCheckbox} color="primary" name="photography"/>}
                    label={t('photography')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControlLabel
                    className={classes.radio}
                    control={<Checkbox onChange={handleChangeCheckbox} color="primary" name="marketing"/>}
                    label={t('snsMarketing')}
                  />
                  <FormControlLabel
                    className={classes.radio}
                    control={<Checkbox  onChange={handleChangeCheckbox} color="primary" name="uxDesign"/>}
                    label={t('uxDesign')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  
                  <FormControlLabel
                    className={classes.radio}
                    control={<Checkbox onChange={handleChangeCheckbox} color="primary" name="uiDesign"/>}
                    label={t('uiDesign')}
                  />
                  <FormControlLabel
                    className={classes.radio}
                    control={<Checkbox onChange={handleChangeCheckbox} color="primary" name="websiteCreation"/>}
                    label={t('websiteCreation')}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControlLabel
                    className={classes.radio}
                    control={<Checkbox onChange={handleChangeCheckbox} color="primary" name="other"/>}
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
                    onChange={handleChangeInput('name')}
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
                    onChange={handleChangeInput('company')}
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
                    onChange={handleChangeInput('email')}
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
                    onChange={handleChangeInput('inquiry')}
                    placeholder={t('contactInquiryPlaceholder')}
                    variant="outlined" 
                  />
                </div>

                { state.displaySubmit ? <ContactSubmitButton /> : thankYouMessage }

                
              </Grid>
            </Grid>
          


          </Grid>
        </Grid>
        

    </form>
  );
};


export default ContactForm;