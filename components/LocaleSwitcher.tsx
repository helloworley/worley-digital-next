import React from 'react'
import { useRouter } from 'next/router'
import { locales, languageNames } from '../translations/config'
import { LocaleContext } from '../context/LocaleContext'

// material 
import { Radio, RadioGroup, FormControlLabel, FormControl }  from '@material-ui/core/';

const LocaleSwitcher: React.FC = () => {
  const router = useRouter()
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
      <RadioGroup aria-label="gender" name="gender1" value={locale} onChange={handleLocaleChange}>
          {locales.map(locale => (
            <FormControlLabel value={locale} key={locale} control={<Radio />} label={languageNames[locale]} />
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
