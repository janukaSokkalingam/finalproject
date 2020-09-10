

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Card from "../Components/card"
import Container from "./Container"
// import HerbsList from "../Components/HerbsList";
import Vegitabls from '../Components/Vegitabls'
import Indoor from '../Components/Indoor';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const tutorialSteps = [
  {
    label: 'Welcome To JoyGreen',
    imgPath:
      'https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop',
  },
  {
    label: 'Bird',
    imgPath:
      ' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5hHPwW7NcuJKmxIZTINvKNlvyNMreJRMG5w&usqp=CAU',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      ' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU-Y_9NB1FOJll1r_AUbk471lmgCNtnIetew&usqp=CAU',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      ' https://i.hurimg.com/i/hdn/75/0x0/5a92ad6967b0a92b502faea6.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      ' https://cdn.givingcompass.org/wp-content/uploads/2018/02/14115455/true-cost.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    
  },
  img: {
    height: 700,
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width:'100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    
    <div className={classes.root}>
      {/* <Container content="Welcome To  JoyGreen"/> */}
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
            <Card/>
             <Vegitabls/>
             {/* <HerbsList/> */}
             {/* <Indoor/> */}
            
    </div>
  );
}

export default SwipeableTextMobileStepper;






// import React, {Component} from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';



// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'left',
//       color: theme.palette.text.secondary,
      
//     },
    
//   }));
//   const style = {
//     root: {
//       minWidth: 275,
//       minHeight: 1000,
//       backgroundImage: `url(https://images.unsplash.com/photo-1511255656699-6df8cf250a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)`,
//       backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//       marginTop: 0,
//       color: 'white'
//     },
//     title: {
//       fontSize: 24,
//       textAlign:'center'
//     },
// }


//   function Home() {
//     const classes = useStyles();
  
//     return (
//       <div className={classes.root}  style={{ padding: 5 }}>
//         <Grid container spacing={1} >
//           <Grid item xs = {12}>
//           <Paper>
//               <Card style={style.root} variant="outlined">
//                 <Grid container spacing={1} >
//                     <Grid item xs = {8}/>
//                     <Grid item xs = {4}>
//                         <Paper style={{ margin: 20 }}>
                             
//                             <div style={{ margin: 5 }}>
//                                 <div style={{ margin: 5 }}>
                                
//                                 </div>
                             
                             
//                             </div>
                            
//                         </Paper>
//                     </Grid>
//                 </Grid>
//               </Card>
//             </Paper>
//           </Grid>
//         </Grid>
//         </div>
//     )
//   }

// export default Home;