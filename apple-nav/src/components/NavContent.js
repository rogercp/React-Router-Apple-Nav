import React, { Component } from 'react';
import {tabData,mydata} from './mydata';
import Tabs from "./tabs"
import NavItems from "./NavItems"
import { Route } from 'react-router-dom';

class NavContent extends Component {
    constructor() {
      super();
      this.state = {
        tabData:[],
        myData:[]
      };
    }

    componentDidMount(){
        this.setState({tabData:tabData});
        this.setState({myData:mydata});
    }
    render() {
       
      return (
        <div className="App">
        <Route exact path="/" render={props=>(
            <Tabs {...props} tabData={this.state.tabData}/>
        )}/>
        <Route  path="/navitems/:id" render={props=>(
            <NavItems {...props} myData={this.state.myData}/>
        )}/>
        
        </div>
      );
    }
  }
  
  export default NavContent;