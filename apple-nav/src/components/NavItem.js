import React from 'react';


const NavItem=(props)=> {
    return (
      <div >
       <img alt={props.item.navName}style={{width:"40px"}}src={props.item.img}/>
      </div>
    );
  }
  export default NavItem;

