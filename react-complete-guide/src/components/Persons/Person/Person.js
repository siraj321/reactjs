//import React from 'react';
import React, {Component} from 'react'; // conver person.js as component
import PropsTypes from 'prop-types';

import Aux from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';

//import Radium from 'radium'
import classes from './Person.css';
//import styled from 'styled-components';


/*const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

@media (min-width: 500px){
        width: 450px;
}`;*/

//const person = (props) => {
class Person extends Component{

    render(){
        console.log('[Person.js] rendaring...')
        return (
            // We can use React.Fragment insted of Aux both work same.
            <Aux>
            <p  key="i1"onClick={this.props.click}>
                     I ' m {this.props.name} and I am {this.props.age} year Old.
           </p>

            <p key="i2">{this.props.children}</p>
            <input 
                 key="i3"
                 type="text" 
                 onChange={this.props.changed} 
                 value={this.props.name}/>
            </Aux>
        );

    }
    /*render(){
        console.log('[Person.js] rendaring...')
        return(    
            <div className={classes.Person}>
                <p onClick={this.props.click}>
                     I ' m {this.props.name} and I am {this.props.age} year Old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            
            </div>
        );

    }*/
    
    // const style = {
    //     '@media(min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    //return (
        //<div className="Person" style={style}>
        
        /*<StyledDiv>
            <p onClick={props.click}> I ' m {props.name} and I am {props.age} year Old.</p>
            <p>{props.children}</p>
            //{ <input type="text" onChange={props.changed} value={props.name} /> }
            <input type="text" onChange={props.changed} value={props.name}/>
        
        </StyledDiv>*/

        //</div>

        
    //);

};

Person.PropsTypes ={
    click:PropsTypes.func,
    name: PropsTypes.string,
    age: PropsTypes.number,
    changed: PropsTypes.func
};
//export default Person;
export default withClass(Person,classes.Person);