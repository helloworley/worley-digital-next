// react
import React from 'react'

// material ui
import { Button, Typography, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// next
import Link from 'next/link';

// translation
import { LocaleContext } from '../../context/LocaleContext';

// custom
import ProjectCard from './ProjectCard.js';
import ContentfulToHTML from '../ContentfulToHTML.js';

// data
import projectPkamasa from '../../data/brandingExample-pkmasa.json';
import projectPtengine from '../../data/brandingExample-ptengine.json';

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: '80px 0 120px',
  }
}));

const ProjectSelector = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);
  
  const [state, setState] = React.useState({
    selectedProject: 'PKMASA Branding',
    pageContentEn: projectPtengine.projectContent.en.content,
    pageContentJa: projectPtengine.projectContent.ja.content,
  });

  const showProject = data => {
    setState({ 
      ...state, 
      selectedProject: data,
      projectTitleEn: data.projectTitle.en,
      projectTitleJa: data.projectTitle.ja,
      projectImages: data.projectImages
    });
  }

  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }

  const testData = [
    {
      nodeType: 'paragraph',
      content: [
        {
          nodeType: 'text',
          value: 'Hello world!',
          marks: [{ type: 'bold' }],
        },
        {
          nodeType: 'text',
          value: 'Hello world!',
          marks: [],
        },
      ],
    },
  ]

  console.log('project', projectPtengine)

  return(  
    <Grid className={classes.wrapper} container spacing={10}>

      <Grid item xs={12}>
        <Typography variant="h1">
          Below you will find some samples of branding projects. 
          A branding project is usually means creating a “Branding Kit”, which details the voice and feel of a product or service. Branding kits are important for business and marketing because they ensure a continuous customer/user experience with a company. When done right, this leads to more trust from your customers, higher lifetime value, more respect and more sales. 
        </Typography>
      </Grid>

      <Grid item xs={12} sm={3} md={4}>
        <ProjectCard 
          showProject={showProject} 
          data={projectPkamasa}
          title={projectPkamasa.projectTitle.en} 
          image={projectPkamasa.projectKeyImage.en.fields.file.en.url}
        />
        <ProjectCard 
          showProject={showProject} 
          data={projectPtengine}
          title={projectPtengine.projectTitle.en} 
          // image={projectPtengine.projectKeyImage.en.fields.file.en.url}
        />
        <ProjectCard showProject={showProject} />
      </Grid>

      <Grid item xs={12} sm={9} md={8}>
        <Typography variant="h1">
          {switchText(state.projectTitleEn, state.projectTitleJa)}
          {/* data must be in the form of an array */}
          <ContentfulToHTML dataEn={state.pageContentEn} dataJa={state.pageContentJa} />
        </Typography>
      </Grid>

    </Grid>
  )};

export default ProjectSelector;