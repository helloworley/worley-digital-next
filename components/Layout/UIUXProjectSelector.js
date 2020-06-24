// react
import React, { useEffect } from 'react'

// material ui
import { Button, Typography, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// translation
import { LocaleContext } from '../../context/LocaleContext';

// custom
import ProjectCard from './ProjectCard.js';
import ContentfulToHTML from '../ContentfulToHTML.js';

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: '0 0 120px',
    [theme.breakpoints.up('md')]: {
      margin: '80px 0 120px',
    }
  },
  contentContainer: {
    [theme.breakpoints.up('sm')]: {
      padding: '0 40px',
    },
  },
  date: {
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
  selectHeading: {
    textAlign: 'center',
    margin: '0 auto 16px',
  }
}));

const UIUXProjectSelector = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);
  const projects = props.projects;
  
  const [state, setState] = React.useState({
    selectedProject: 'PKMASA Branding',
  });

  const showProject = data => {
    setState({ 
      ...state, 
      selectedProject: data,
      projectTitleEn: data.projectTitle.en,
      projectTitleJa: data.projectTitle.ja,
      pageContentEn: data.projectContent.en.content,
      pageContentJa: data.projectContent.ja.content,
      projectDateEn: data.date.en,
      projectDateJa: data.date.ja,
    });
  }

  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }

   // for visually discerning which project is selected in the ProjectCards
   const checkSelectedProjectCard = (projectLink, selectedStateLink) => {
    return projectLink == selectedStateLink ? true : false;
  }

  useEffect(() => {
    // code to run on component mount
    showProject(projects[0])
  }, [])

  const projectOptions = projects.map( (project, i) => {
    return <Grid item xs={6} sm={4} md={12} key={i}>
      <ProjectCard 
        showProject={showProject} 
        data={project}
        title={project.projectTitle.en}
        image={project.featureImage.en.fields.file.en.url}
        selected={checkSelectedProjectCard(project.projectTitle.en, state.projectTitleEn)}
      />
    </Grid>
  });
  

  return(  
    <div className={classes.contentContainer}>

      <Grid className={classes.wrapper} container>

        <Grid item xs={12} md={8} className={classes.colContent}>
          <Typography variant="h1">
            {switchText(state.projectTitleEn, state.projectTitleJa)}
          </Typography>
          <Typography variant="h4" className={classes.date}>
            {switchText(state.projectDateEn, state.projectDateJa)}
          </Typography>
          {/* data must be in the form of an array */}
          <ContentfulToHTML dataEn={state.pageContentEn} dataJa={state.pageContentJa} />
        </Grid>

        <Grid item xs={12} md={1} className={classes.colSpace}>
        </Grid>

        <Grid item xs={12} md={3} className={classes.colOptions}>
          <Grid spacing={3} container className={classes.projectOptions}>
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.selectHeading}>{switchText('Select a Project', 'プロジェクトを選んでください')}</Typography>
            </Grid>
            {projectOptions}
          </Grid>
        </Grid>

      </Grid>

    </div>
  )};

export default UIUXProjectSelector;