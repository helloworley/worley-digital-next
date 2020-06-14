import React from 'react'
import { useRouter } from 'next/router'
import { locales, languageNames } from '../translations/config'
import { LocaleContext } from '../context/LocaleContext'

// material 
import { Radio, RadioGroup, FormControlLabel, FormControl }  from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  radioGroup: {
    flexDirection: 'initial',
    float: 'right',
  },
  formControlLabel: {
    marginRight: '0',
    marginLeft: '8px',
    '& .MuiRadio-root + span': {
      color: 'rgba(255,255,255,.7)',
    },
    '& .Mui-checked + span': {
      fontWeight: '900',
      color: 'white',
    }
  },
  test: {
    display: 'none',
  }
});

const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext)

  const handleLocaleChange = React.useCallback(
    (e) => {
      const regex = new RegExp(`^/(${locales.join('|')})`)
      router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`))
    },
    [router]
  )

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="gender1" value={locale} onChange={handleLocaleChange} className={classes.radioGroup}>
          {locales.map(locale => (
            <FormControlLabel 
              value={locale} 
              key={locale} 
              className={classes.formControlLabel}
              control={<Radio className={classes.test} />} 
              label={languageNames[locale]} 
            />
          ))}
      </RadioGroup>
    </FormControl>

    // <select value={locale} onChange={handleLocaleChange}>
    //   {locales.map(locale => (
    //     <option key={locale} value={locale}>
    //       {languageNames[locale]}
    //     </option>
    //   ))}
    // </select>
  )
}

export default LocaleSwitcher
