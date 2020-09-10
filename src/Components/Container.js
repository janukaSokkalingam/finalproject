import React from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {  makeStyles } from '@material-ui/core/styles';

const style = {
    root: {
    Width: 10,
      backgroundImage: `url(https://hercanberra.com.au/wp-content/uploads/2015/11/vegetable-garden-slider.jpg)`,
      // marginTop: 20,
      height: 200,
      color: 'white'
    },
    title: {
      fontSize: 44,
      textAlign:'center'
    },
}


function Container(props) {
    return (
      <React.Fragment>
        <Grid container>

          <Grid item xs={12}>
            <Paper>
              <Card style={style.root} variant="outlined">
                <CardContent>
                  <Typography variant="overline" display="block" style={style.title} gutterBottom>

                    {props.content}

                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          
        </Grid>


      </React.Fragment>
    )
}

export default Container
