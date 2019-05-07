import React, { Component } from 'react';
import {tabData,mydata} from './mydata';
import Tabs from "./tabs"

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

        <Tabs tabData={this.state.tabData}/>
        {/* <NavITems/> */}
         
        </div>
      );
    }
  }
  
  export default NavContent;