import React, { useEffect } from 'react';

import comclass from './Cockpit.css';
//import { useEffect } from 'react';

const Cockpit = (props) =>  {
// change Cockpit to cockpit for react hook - useEffect
useEffect(() => {
  console.log('[Cockpit.js] useEffect');
  // Http request...
  setTimeout(() => {
    alert('Saved data to cloud!');
  }, 1000);
  return () => {
    console.log('[Cockpit.js] cleanup work in useEffect');
  };
}, []);

useEffect(() => {
  console.log('[Cockpit.js] 2nd useEffect');
  return () => {
    console.log('[Cockpit.js] cleanup work in 2nd useEffect');
  };
});



    let btnClass = '';
    const classes = [];

    if(props.showPersons){
        btnClass = comclass.Red;
    }
    
    if(props.persons.length <= 2){
      classes.push(comclass.red);
    }

    if(props.persons.length <= 1){
      classes.push(comclass.bold);
    } 
    
 return (
     <div className={comclass.Cockpit}>
        <h1> {props.title}   </h1>
        <p className={classes.join(' ')}>This is really working.</p>
        <button
            className={btnClass} onClick={props.clicked}>
            Toggle Persons
        </button>
      </div>
 );   
};

export default Cockpit;