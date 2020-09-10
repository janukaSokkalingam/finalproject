import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

 import App from '../App'
import {DataProvider} from './section/Context'
import Navbar from './Navbar';
import Section from './Section';


class Main extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
          <App/>
           <Section/>
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default Main;
