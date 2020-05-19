import React from 'react';
import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Head from 'next/head';
import { withStyles } from '@material-ui/styles';


const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#595959",
        lightText: "#efefef",
      },
      sedona: {
        darkgray: "#424242",
        darkestgray: "#212121",
        lightgray: "#8E8E93",
        beige: "#C8BFB9",
        white: "#fff",
      }
    },
    typography: {
      fontFamily: [
        'Lato',
        '"Helvetica Neue"',
        'Arial',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontWeight: "900",
        fontSize: '2em',
        lineHeight: "1.3",
        color: "#616161",
      },
      h2: {
        fontWeight: "900",
        fontSize: "1.3em",
        lineHeight: "1.3",
        margin: "0 0 1em",
        color: "#616161",
      },
      h3: {
        fontWeight: "700",
        fontSize: "17px",
        lineHeight: "1.3",
        margin: "0 0 40px",
        textAlign: "center",
        color: "#616161",
      },
      h4: {
        fontSize: "17px",
        lineHeight: "1.3",
        fontWeight: 500,
        margin: "0 0 40px",
        textAlign: "center",
        color: "#616161",
      },
      fontWeightMedium: 500,
      body1: {
        fontWeight: 500,
        lineHeight: 1.8,
        color: "#616161",
      },
      body2: {
        fontWeight: 500,
        lineHeight: 1.3,
        color: "#616161",
      },
      subtitle1: {
        fontSize: 12,
        color: "#616161",
      },
      button: {
        fontStyle: 'italic',
        color: "#616161",
      },
    },
    section: {
      half: {
        padding: {
          md: "96px 96px"
        }
      },
      padding: {
        xs: "96px 30px",
        sm: "96px 120px",
        md: "96px 15% 120px",
      }
    }
  });

 

class MyApp extends App {

  state = {
    contactOpen: false,
  }

  toggleContactForm = e => this.setState({ contactOpen: !this.state.contactOpen });

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>Worley Digital</title>
      </Head>
        <CssBaseline />
        <div>
          <MuiThemeProvider theme={theme}>
            <Component {...pageProps} {...this.state} toggleContactForm={this.toggleContactForm} />
          </MuiThemeProvider>
        </div>
      </>
    );
  }
}


export default MyApp;