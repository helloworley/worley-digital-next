// react
import React, { useEffect } from 'react'

// material ui
import { Button, Typography, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

// translation
import { LocaleContext } from '../../context/LocaleContext';

// custom
import ProjectCard from './ProjectCard.js';
import ContentfulToHTML from '../ContentfulToHTML.js';
import WebsiteTechCard from './WebsiteTechCard.js';

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: '80px 0 120px',
  },
  contentContainer: {
    // maxWidth: '95%',
    // margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      padding: '0 40px',
    },
  },
  projectImage: {
    maxWidth: '100%',
    margin: '40px 0',
  },
  techDisplayCards: {
    margin: '24px 0 64px'
  },
  brand: {
    margin: '16px 0 0',
    lineHeight: '1.8',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  colContent: {
    order: 3,
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
  },
  colSpace: {
    order: 2,
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },
  colOptions: {
    order: 1,
    [theme.breakpoints.up('md')]: {
      order: 3,
    },
  },
  projectOptions: {
    marginBottom: '80px'
  },
  openIcon: {
    margin: '4px 0 0 8px',
  },
  linkToSite: {
    textDecoration: 'none',
  }
}));

const ProjectSelectorWebsites = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);
  
  const [state, setState] = React.useState({
    selectedProject: '',
  });

  console.log('props', props)

  const showProject = data => {
    setState({ 
      ...state, 
      selectedProject: data,
      projectDateEn: data.date.en,
      projectDateJa: data.date.ja,
      projectTitleEn: data.link.en,
      projectImage: data.image.en.fields.file.en.url,
      pageContentEn: data.content.en.content,
      pageContentJa: data.content.ja.content,
      brandEn: data.brand.en,
      brandJa: data.brand.ja,
      frontendIcon: data.frontend.en.fields.logo.en.fields.file.en.url,
      frontendText: data.frontend.en.fields.name.en,
      frontendLink: data.frontend.en.fields.link.en,
      backendIcon: data.backend.en.fields.logo.en.fields.file.en.url,
      backendText: data.backend.en.fields.name.en,
      backendLink: data.backend.en.fields.link.en,
    });
  }

  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }

  const projects = props.projects;

  useEffect(() => {
    // code to run on component mount
    showProject(projects[0])
  }, [])

  // for visually discerning which project is selected in the ProjectCards
  const checkSelectedProjectCard = (projectLink, selectedStateLink) => {
    return projectLink == selectedStateLink ? true : false;
  }

  const projectOptions = projects.map( (project, i) => {
    return <Grid item xs={6} sm={4} md={12} key={i}>
      <ProjectCard 
        showProject={showProject} 
        data={project}
        title={project.link.en}
        image={project.featureImage.en.fields.file.en.url}
        selected={checkSelectedProjectCard(project.link.en, state.projectTitleEn)}
      />
    </Grid>
  });
  

  return(  
    <div className={classes.contentContainer}>

      <Grid className={classes.wrapper} container>

        <Grid item xs={12} md={8} className={classes.colContent}>
          <a href={`https://${state.projectTitleEn}`} target="_blank" className={classes.linkToSite}>
              <Typography variant="h1">
              {state.projectTitleEn}
              <OpenInNewIcon className={classes.openIcon}/>
            </Typography>
          </a>
          <Typography variant="h4" className={classes.brand}>
            {switchText(state.brandEn, state.brandJa)} <br/>
            {switchText(state.projectDateEn, state.projectDateJa)}
          </Typography>

          <img src={state.projectImage} className={classes.projectImage} />

            <div className={classes.techDisplayCards}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <WebsiteTechCard 
                    type={switchText('Frontend', 'フロントエンド')}
                    icon={state.frontendIcon}
                    text={state.frontendText}
                    link={state.frontendLink}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <WebsiteTechCard 
                    type={switchText('Backend', 'バックエンド')}
                    icon={state.backendIcon}
                    text={state.backendText}
                    link={state.backendLink}
                  />
                </Grid>
              </Grid>
            </div>


          {/* data must be in the form of an array */}
          <ContentfulToHTML dataEn={state.pageContentEn} dataJa={state.pageContentJa} />
        </Grid>


        <Grid item xs={12} md={1} className={classes.colSpace}>
        </Grid>

        <Grid item xs={12} md={3} className={classes.colOptions}>
          <Grid spacing={3} container className={classes.projectOptions}>
            {projectOptions}
          </Grid>
        </Grid>

      </Grid>

    </div>
  )};

export default ProjectSelectorWebsites;