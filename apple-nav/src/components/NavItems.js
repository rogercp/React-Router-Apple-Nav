import React from 'react';
import NavItem from "./NavItem"

const NavItems=(props)=> {
    return (
      <div style={{display:"flex",justifyContent:"space-around"}} >
       {props.myData.map((item,i)=>(
           <NavItem key={item.navName} item={item}/>
       ))}
      </div>
    );
  }
  export default NavItems;

