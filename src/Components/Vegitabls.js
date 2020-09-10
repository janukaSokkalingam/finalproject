import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import logo_1 from './logo_1.png'
import tom from '/home/ukikcpc03/Desktop/myproject/project/src/tom.jpg'
import brinjal from '/home/ukikcpc03/Desktop/myproject/project/src/brinjal.jpeg'
import GreenChilli from '/home/ukikcpc03/Desktop/myproject/project/src/GreenChilli.jpg'
import greens from '/home/ukikcpc03/Desktop/myproject/project/src/greens.jpg'
import ladies from '//home/ukikcpc03/Desktop/myproject/project/src/ladies.jpg'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Buy from './buy';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginTop: 60,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));

  const tileData = [
       {
         img:tom,
         title: 'tommoto',
         author: 'author',
       },
       
       {
        img: brinjal,
        title: 'logo',
        author: 'author',
      },
      {
        img: GreenChilli,
        title: 'logo',
        author: 'author',
      },
      {
        img:greens,
        title: 'logo',
        author: 'author',
      },
      // {
      //   img:ladies,
      //   title: 'logo',
      //   author: 'author',
      // },
      // {
      //   img: logo_1,
      //   title: 'logo',
      //   author: 'author',
      // },
      // {
      //   img: logo_1,
      //   title: 'logo',
      //   author: 'author',
      // },
  ]



  export default function SingleLineGridList() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={4.5} >
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <Grid item xs={12}>
                    <Button href="buy" size='small' color='primary' varient='outlined' style={{marginTop:15,width:130}}>
                      BUYNOW
                    </Button>
             
                   {/* <IconButton >
                      <AddShoppingCartIcon className={classes.title} /> 
                  </IconButton> */}
                    </Grid>
                  }
                 
                
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }