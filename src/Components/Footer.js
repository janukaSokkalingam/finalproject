import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import logo_1 from './logo_1.png'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import download from './download.png'

const useStyles = makeStyles({
    appBar: {
    top: 'auto',
      bottom: 0,
      hight:50,
      backgroundColor:" #909090",
    //   backgroundColor:'#994d00',
      color: ' #000000',
      position:"absolute",
      marginBottom: -200,
    
    },
});

function Footer() {
    const classes = useStyles();
    let Year = new Date().getFullYear();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Grid container spacing={1}>
            <Grid item xs={2}>
                <p>Contact</p>
                <br/>
                <EmailIcon/>
                <FacebookIcon/>
                <InstagramIcon/>
                {/* <TwitterIcon/><br/> */}
                <p>07712345</p>
            </Grid>

            {/* <Grid item xs={2}>
                <br/>
                <br/>
                <p>JoyGreen</p><br/>
                <p>Kilinochchi</p><br/>
                <p>AAAAAAAA</p> <br/>
                <p>TTTTTTT</p><br/>
            </Grid> */}


            <Grid item xs={8}>
                <Typography variant="overline" align="center" >
                {/* <img src={logo_1} height='60' width='60' /><br/> */}
                    Copyrights <CopyrightIcon style={{ fontSize: 15}}/> {Year}-{Year+1} <br/>   All Rights Reserved by JoyGreen
                </Typography>
            </Grid>
            <Grid item xs={2}></Grid>
            </Grid>
            <Grid container spacing={1}>



            
            <Grid item xs={2}></Grid>
            </Grid>
        </AppBar>

    );


    }



export default Footer;

 
