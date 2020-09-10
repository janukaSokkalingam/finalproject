// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from './Components/Navbar'
// import Sidebar from './Components/Home';
// import Grid from '@material-ui/core/Grid';
// import Home from './Components/Home';
//  import Signin from './Components/Signin.js';
// import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
// import About from './Components/About';
// import Admin from './Components/Admin';
// import Signup from './Components/Signup';
// import Footer from './Components/Footer';
// import HerbsList from './Components/HerbsList'
// import Shop from './Components/Shop'
// import Buy from './Components/buy';
// import AddUser from './Components/AddUser';
 
// import UserDetails from './Components/UserDetail';
// import EditProducts from './Components/EditProducts';
// import UserList from './Components/UserList';
// import BookList from './Components/BookList';

 

// function App() {
//   return (
//     <Router>
    
//     <div>

    
//        <Navbar/>
//        <div>
//             <Switch>
//               <Route exact path={["/", "/home"]} component={Home} />
//               <Route exact path= "/About" component={About} />
//               <Route path="/Admin" component={Admin} />
//               <Route path="/Signin" component={Signin} />
//               <Route path="/Signup" component={Signup} />
//               <Route path="/Shop" component={Shop} />
//               <Route path="/buy" component={Buy} />
//               <Route exact path="/AddUser" component={AddUser} />
//               <Route exact path="/EditProducts" component={EditProducts} />
//               <Route exact path="/Userdetails" component={UserDetails} />
//               {/* <Route exact path="/userlist" component={UserList} /> */}
//               {/* <Route exact path="/booklist" component={BookList} /> */}

//               </Switch>
            
//           </div>
         
         
//           <Footer/>
        
       
//      </div>
//        </Router>
//   );
// }

// export default App;


import React , {Component} from 'react';
import {AppBar, Button, Typography,Toolbar, Grid, Paper, Card, CardContent} from '@material-ui/core';
 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from './Components/Signin.js';
// import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import About from './Components/About';
import Admin from './Components/Admin';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import HerbsList from './Components/HerbsList'
import Shop from './Components/Shop'
import Buy from './Components/buy';
import AddUser from './Components/AddUser';
 import logo_1 from '/home/ukikcpc03/Desktop/myproject/project/src/Components/logo_1.png'
 
import UserList from './Components/UserList';
import VeiwProducts from './Components/VeiwProducts';
import AddProducts from './Components/AddProducts';
import Home from '/home/ukikcpc03/Desktop/myproject/project/src/Components/Home.js'
 
 
 
 
 
import {DataContext} from './Components/section/Context.js'
import {Link} from 'react-router-dom'
 
 
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Cart from './Components/section/Cart.js';
import Products from './Components/section/Products.js';
 
 




const style = {
  root: {
    flexGrow: 1,
  },
  paper: {
    flexGrow: 1,
    backgroundColor: 'black',
    color: 'black'
  },
  menuButton: {
    spacing: 2,
  },
  link: {
    underline: 'none'
  },
  appBar: {
    backgroundColor: "white",
    
  },
  search: {
    position: 'relative',
    //borderRadius: theme.shape.borderRadius,
    //backgroundColor: fade(theme.palette.common.white, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    marginLeft: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //  marginLeft: theme.spacing(1),
    //   width: 'auto',
    // },
  },
  searchIcon: {
    //padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
}

class App extends Component{ 
  static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }
  render() {
    const {toggle} = this.state;
    const {cart} = this.context;
    const {product,addCart} = this.context;

    return(
      <div style={style.root}>
        <Router>
      <AppBar position="static"  style={style.appBar} className={toggle ? "toggle" : ""}>
          <Toolbar>
           <img src ={logo_1} height='40' width='50'/> 
          
              
              
              <Grid item xs={12}>
              <Button href="/home" color="black" ><strong>Home</strong></Button>
              <Button href="/about" color="black" ><strong>About</strong></Button>
     <TextField 
                           id="input-with-icon-textfield"
                           InputProps={{
                               startAdornment: (
                               <InputAdornment position="start">
                                   <IconButton type="submit" aria-label="search">
                                       <SearchIcon />
                                   </IconButton>
                               </InputAdornment>
                               ),
                           }}
                           />
              </Grid>
              <Button href="/shop" color="black"><strong>Shop</strong></Button>
              
            <span><Typography style={{color:"black"}}>{cart.length}</Typography></span>
            
                        <Link to="/cart"> </Link>

              <Button href="/Cart" color="black"  onClick={()=> addCart(product._id)} ><strong><ShoppingCartIcon style={{"fontSize":30}}>Addtocard</ShoppingCartIcon></strong></Button>
               <Button href="/signin" color="black"><strong>Signin</strong></Button>
               <Button href="/signup" color="black"><strong>Signup</strong></Button>
      <div style={{"padding":'20px',}}>
      </div>
              
          </Toolbar>
      </AppBar>


      
      <div>
            <Switch>
              
              
              <Route exact path={[ "/","/home"]} component={Home} />
               <Route exact path= "/About" component={About} />
               <Route path="/Admin" component={Admin} />
               <Route path="/Signin" component={Signin} />
               <Route path="/Signup" component={Signup} />
               <Route path="/Shop" component={Products} />
               <Route path="/buy" component={Buy} />
               <Route exact path="/AddUser" component={AddUser} />
               <Route exact path="/veiwproducts" component={VeiwProducts} />
              {/* <Route exact path="/Userdetails" component={UserDetails} /> */}
              <Route exact path="/userlist" component={UserList} /> 
              {/* <Route exact path="/booklist" component={BookList} /> */}
              <Route exact path= "/Cart" component={Cart} />
              <Route exact path="/AddProducts" component={AddProducts} />
               



              
              
              
            </Switch>
          </div>
        
       <Footer/>
        
       
      </Router>
      
      </div>
    
    );
    }
    }


    export default App;
