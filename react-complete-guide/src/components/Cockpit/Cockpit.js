import React from 'react';

import comclass from './Cockpit.css';

const cockpit = (props) =>  {

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

export default cockpit;