import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import GroupIcon from '@material-ui/icons/Group';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Button } from '@material-ui/core';


const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      
    },
    
  }));
  const style = {
    root: {
      minWidth: 275,
      backgroundColor:'white',
      marginTop: 40,
      color: 'white'
    },
    title: {
      fontSize: 20,
      textAlign:'center'
    },
}


  class Admin extends Component {
    UserAdd = (e) => {
      this.props.history.push('/AddUser')
      localStorage.removeItem("exportin");
      window.location.reload();
    }
    UserUpdate = (e) => {
      this.props.history.push('/AddUser');
      window.location.reload();
    }
    UserView = (e) => {
      this.props.history.push('/UserList');
      window.location.reload();
    }
    render(){
    return (
      <div className={classes.root}  style={{ padding: 8}}>
        <Grid container spacing={1} >
          <Grid item xs>
          </Grid>
          <Grid item xs = {8}>
          <Paper>
              <Card style={style.root} variant="outlined">
                  <center><h1 style = {{backgroundColor : "black"}}>Welcome to Admin Panel</h1></center>
                
                <div >
                    <Grid container spacing={2}>
                        <Grid item xs = {5}>
                            <Paper className={classes.paper} style = {{backgroundColor : "white"}}>
                             
                                <GroupIcon style={{ fontSize: 200 }}/>
                            
                                <br/>
                                <p style = {{color: "white"}}>Manage Users</p>
                                <Button href= "/AddUser">Add user</Button>
                                <Button  href="/UserList">View User</Button>
                            </Paper> 
                        </Grid>
                        <Grid item xs = {2}/>
                        <Grid item xs ={5}>
                        <Paper className={classes.paper} style = {{backgroundColor : "white"}}>
                             
                                <MenuBookIcon style={{ fontSize: 200 }}/>
                            
                                <br/>
                                <p style = {{color: "white"}}>Manage Books</p>
                                <Button  href="/AddProducts">Add products</Button>
                                <Button href="/veiw Products">Manage products</Button>
                            </Paper> 
                        </Grid>
                    </Grid>
                </div>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
        </div>
    )
  }
}


export default Admin 




// import React from 'react';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';




// function Admin(){
//     return(
//         <>
//         <Grid container spacing={1} style = {{fontFamily:"monospace"}}>
//                 <Grid item xs = {2}/>
//                 <Grid item xs = {8} style ={{margin : "5%"}}>
//                     <Card style = {{backgroundColor:"white"}}>
//                         <Paper style = {{backgroundColor:"white"}}>
//                             <h1> Welcome to the Admin Board</h1>
//                             <Grid container spacing={1} style ={{padding : 40}}>
//                             <Grid item xs = {1}/>
//                             <Grid item xs = {4} >
//                                 <Card style = {{backgroundColor:"#c3cacb"}}>
//                                     <h3>Manage Users</h3>
//                                     <br/>
//                                     <Button align = "right" href = "/signup">Add user</Button>
//                                     <Button align = "left" href = "/userDetails">View Users</Button>
//                                 </Card>
//                             </Grid>
//                             <Grid item xs = {2}/>
//                             <Grid item xs = {4}>
//                                 <Card style = {{backgroundColor:"#c3cacb"}}>
//                                     <h3>Manage products</h3>
//                                     <br/>
                                    // <Button align = "right" href = "/sell">Add Book</Button>
                                    // <Button align = "left" href = "/BookDetails">View Books</Button>
//                                 </Card>
//                             </Grid>
//                             <Grid item xs = {1}/>
//                             </Grid>
//                         </Paper>
//                     </Card>
//                 </Grid>
//                 <Grid item xs = {2}/>
//         </Grid>
//         </>
//     )
// }
// export default Admin