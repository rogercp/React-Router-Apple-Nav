import React from 'react';
import Tab from "./tab"


const Tabs=(props)=> {
    return (
      <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
       {props.tabData.map((tab,i)=>(
           <Tab key={i} tab={tab}/>
       ))}
      </div>
    );
  }
  export default Tabs;

