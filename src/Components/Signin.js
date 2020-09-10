import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import { Card, CardContent, Typography, Grid, FormControl, TextField,Button } from '@material-ui/core';
// import { Face } from '@material-ui/icons';


const style = {
  root: {
    minWidth: 275,
    backgroundColor:'white',
    marginTop: 60,
    color: '#00000'
  }
}

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin = (e) => {
    e.preventDefault();

    if (this.state.username && this.state.password) {
          console.log("username = " + this.state.username)
          console.log("password = " + this.state.password)
          localStorage.setItem('id', '1');
          localStorage.setItem('username', this.state.username);
          localStorage.setItem('email', 'biru@gmail.com');
          localStorage.setItem('roles', 'ROLE_ADMIN');
          this.props.history.push("/profile");
          window.location.reload();
    } else {
      this.setState({
        message: "Empty username or password"
      })
    }
  }

  render() {
    return (
      <div style={{backgroundColor:"white"}}>
      <Grid container>
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <Card style={style.root}>
              <CardContent>
                <form onSubmit={this.handleLogin}>
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                        {/* <Face style={{ fontSize: 80 }}/> */}
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <label htmlFor="username">Username</label>
                          <TextField type="text" name="username" value={this.state.username}
                            onChange={this.onChangeUsername}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <label htmlFor="password">Password</label>
                          <TextField type="password" name="password" value={this.state.password}
                            onChange={this.onChangePassword}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                        <Button variant="outlined" color="primary" >
        signin
      </Button>
                        </FormControl>
                      </Grid>
                  </Grid>
                  {this.state.message && (
                    <div>
                      <Typography color='error' variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )}
                </form>
              </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
      </div>
    );
  }
}



 

// import React from "react";
// import {
// Button,
// TextField,
// Grid,
// Paper,
// AppBar,
// Typography,
// Toolbar,
// Link,
// } from "@material-ui/core";
// import {BRAND_NAME} from '../constants'
// class Login extends React.Component {
// constructor(props) {
// super(props);
// this.state = { username: "", password:"", authflag:1 };
// this.handleChange = this.handleChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);
// }
// handleChange(event) {
// this.setState({ username: event.state.username, password: event.state.password });
// }
// handleSubmit(event) {
// event.preventDefault();
// if (this.state.username == 'admin@littech.in' && this.state.password == 'secret') {
// this.props.history.push("/home");
// } else {
// alert('Incorrect Credntials!');
// }
// }
// render() {
// return (
// <div>
 
 
// <Grid container spacing={0} justify="center" direction="row">
// <Grid item>
// <Grid
// container
// direction="column"
// justify="center"
// spacing={2}
// className="login-form"
// >
// <Paper
// variant="elevation"
// elevation={2}
// className="login-background"
// >
// <Grid item>
// <Typography component="h1" variant="h5">
// Sign in
// </Typography>
// </Grid>
// <Grid item>
// <form onSubmit={this.handleSubmit}>
// <Grid container direction="column" spacing={2}>
// <Grid item>
// <TextField
// type="email"
// placeholder="Email"
// fullWidth
// name="username"
// variant="outlined"
// value={this.state.username}
// onChange={(event) =>
// this.setState({
// [event.target.name]: event.target.value,
// })
// }
// required
// autoFocus
// />
// </Grid>
// <Grid item>
// <TextField
// type="password"
// placeholder="Password"
// fullWidth
// name="password"
// variant="outlined"
// value={this.state.password}
// onChange={(event) =>
// this.setState({
// [event.target.name]: event.target.value,
// })
// }
// required
// />
// </Grid>
// <Grid item>
// <Button
// variant="contained"
// color="primary"
// type="submit"
// className="button-block"
// >
// Submit
// </Button>
// </Grid>
// </Grid>
// </form>
// </Grid>
// <Grid item>
// <Link href="#" variant="body2">
// Forgot Password?
// </Link>
// </Grid>
// </Paper>
// </Grid>
// </Grid>
// </Grid>
// </div>
// );
// }
// }
// export default signin;