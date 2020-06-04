import Masonry from 'react-masonry-css';

import { makeStyles } from '@material-ui/core/styles';
 
//...

const useStyles = makeStyles(theme => ({
  image: {
    maxWidth: '100%',
  },
  masonryGrid: {
    display: 'flex'
  }
}));
 
const Index = props => {
  const classes = useStyles();

  const childElements = props.elements.map(function(element, i){
    return (
        // <li key={i} lassName="image-element-class">
            <img src={element.fields.file.en.url} className={classes.image }/>
        // </li>
      );
    });

    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

  return(
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={classes.masonryGrid}
      columnClassName="my-masonry-grid_column">
        {childElements}
    </Masonry>
)};

export default Index;