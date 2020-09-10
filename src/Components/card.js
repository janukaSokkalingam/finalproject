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

export default function MediaControlCard() {
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
