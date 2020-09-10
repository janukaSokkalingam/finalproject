// import React from 'react';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import { Paper,Button} from "@material-ui/core";
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import LocalMallIcon from '@material-ui/icons/LocalMall';
// import{Link} from 'react-router-dom'
// import logo_1 from './logo_1.png'
// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//     },
//   },
   
// }));

// export default function Navbar() {
//   const classes = useStyles();
   

//   return (
//     <div className={classes.grow}>
//       <AppBar position="static" style={{backgroundColor:" white"}}>
//         <Toolbar>
        
//           <img src={logo_1} height='60' width='60' />
//           <Typography className={classes.title} variant="h6" noWrap>
            
             

            
//           </Typography>
         
                 
                    
                 
//           <Button href="/home" color='inherit'>
//                     <strong  style={{color:"black"}}>Home</strong>
//                   </Button>
                
              
 
//                   <Button href="/About" color='inherit'>
//                     <strong  style={{color:"black"}}>About us</strong>
//                   </Button>
 
          // <div className={classes.search}>
          //   <div className={classes.searchIcon}>
          //     <SearchIcon />
          //   </div>
          //   <InputBase
          //     placeholder="Search…"
          //     classes={{
          //       root: classes.inputRoot,
          //       input: classes.inputInput,
          //     }}
          //     inputProps={{ 'aria-label': 'search' }}
          //   />
          // </div>
          // <div className={classes.grow} />
          // <div className={classes.sectionDesktop}>
          //   <IconButton   color="black">
          //     <Badge   color="secondary">
          //       <LocalMallIcon />
          //     </Badge>
          //   </IconButton>


          //   </div>


          //   <Button href="/Shop" color='inherit'>
          //           <strong style={{color:"black"}}>Shop</strong>
          //         </Button>

          //   <Button href="/Signin" color='inherit'>
          //           <strong style={{color:"black"}}>Signin</strong>
          //         </Button>

          //         <Button href="/Signup" color='inherit'>
          //           <strong  style={{color:"black"}}>Signup</strong>
          //         </Button>
 
//         </Toolbar>
//       </AppBar>
     
//     </div>
//   );
// }
