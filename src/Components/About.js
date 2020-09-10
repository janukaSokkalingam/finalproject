// import React,{Component} from 'react';

// class  About extends Component{
//     render(){
//         return(
//             <div>
//                   <h1>About Us</h1>
//                    <p> 

// Joy Green is a business for selling organic, healthy and natural products. <br/>
// Joy Green also sells herbal plants that are rarely available. Products like seeds, plants, harvests, organic fertilizers, harvests are to be sold all around the island.<br/>
//  People can consume our products for an affordable price and with good quality.<br/> People who are selling organic goods can register with us to get a customer circle and to get a good market for their organic products.
// </p> 
//             </div>
          
//         )
//     }
// }
// export default About;



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// export default function About() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (

//     <Card className={classes.root}>
//       <CardContent>
       
//         <Typography variant="h5" component="h2">
//           About us
//         </Typography>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }



import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import organic from '//home/ukikcpc03/Desktop/myproject/project/src/organic.jpeg';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 60,
    marginRight:500,
    marginLeft:500,

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    
  },
  cover: {
    width: '30%',
    height:400,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
 
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          Produce is always greener 
on this side 💚
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          At Joygreen, Our farms are close to where your home is.<br/>
          Every choice we make brings you vegetables at the height of freshness, flavor & nutrition.<br/>
           Come, fall in love!


          </Typography>
        </CardContent>
      </div> 
      <CardMedia
        className={classes.cover}
        image=" https://i0.wp.com/www.malabardevelopers.com/wp-content/uploads/2019/03/Benefits-of-Organic-Farming-Malabar-Developers-e1552632767327.jpeg?w=1200&ssl=1"
        title="Live from space album cover"
      />
    </Card>
  );
}
