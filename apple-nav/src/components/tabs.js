import React from 'react';
import Tab from "./tab"


const Tabs=(props)=> {
    return (
      <div>
       {props.tabData.map((tab,i)=>(
           <Tab key={i} tab={tab}/>
       ))}
      </div>
    );
  }
  export default Tabs;

