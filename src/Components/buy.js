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
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Button';
import Icon from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 60,
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Tomatoes seeds
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          100Grm<br/>
          20 rps <br/>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        BUYNOW
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* To subscribe to this website, please enter your email address here. We will send updates
            occasionally. */}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="Address"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id=" Building Name"
            label="Building name"
            type="Building name"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="Land Mark"
            label="LandMark"
            type="LandMark"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="Mobile Number"
            label="Mobile Number"
            type="Mobile Number"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="Name"
            label="Name"
            type="Name"
            fullWidth
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Pay
          </Button>
        </DialogActions>
      </Dialog>

                      
           



          </Typography>
        </CardContent>
        
       </div> 


  
      <CardMedia
        className={classes.cover}
        image="  https://cdn.shopify.com/s/files/1/0273/4614/1253/products/pirandai2d_1024x1024@2x.jpg?v=1590251795"
        title="Tomotoe seeds"
    
      /> <br/>
       <p> Benifits & Nutrison <br/>
           <br/>
          


      </p> 
      
     </Card>
  );
}
