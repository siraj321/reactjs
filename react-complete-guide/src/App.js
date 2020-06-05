import React, { Component } from 'react';
//import React, { useState } from 'react';
import comclass from './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
//import person from './Person/Person';
//import styled from 'styled-components';
//import ErrorBoundary from './ErrorBoundary/ErroBoundary'

// const StyledButton = styled.button`
// background-color: ${props => props.alt ? 'red' : 'green'};
// font: white; 
// border: 1px solid blue;
// padding: 8px;
// cursor: pointer;

// &:hover: {
//   background-color: lightgreen;
//   color: black;
// }
// `;

class App extends Component {
  state = {
    person: [
      { id: 'id1', name: 'Max', age: 28 },
      { id: 'id2', name: 'Max2', age: 24 },
      { id: 'id3', name: 'Max3', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked!');
    this.setState({
      person: [
        { name: newName, age: 28 },
        { name: 'Max2', age: 24 },
        { name: 'Max3', age: 26 }
      ] 
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id ===id;
    });

    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;

    const persons =[...this.state.person];
    persons[personIndex] = person;

    this.setState({person:persons});


    this.setState({
      person: [
        { name: 'name one', age: 28 },
        { name: event.target.value, age: 24 },
        { name: 'Max3', age: 27 }
      ] 
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person];
    persons.splice(personIndex,1);
    this.setState({person:persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})

  }
  render() {
    const style = {
      backgroundColor: 'green',
      font: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }

    } 

    let persons = this.state.persons;

    
    if (this.state.showPersons) {
      persons =(
        <div>
          {this.state.person.map((per, index) =>{
            return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={per.name}
                      age={per.age}
                      key={per.id}
                      changed={(event) => this.nameChangeHandler(event,per.id)}/>
          })} 
        </div>
      );
      // style.backgroundColor = 'red'
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
    //let classes = ['red','bold'].join(' ')

    const classes = [];
    if(this.state.person.length <= 2){
      classes.push(comclass.red);
    }

    if(this.state.person.length <= 1){
      classes.push(comclass.bold);
    }

    return (

      <StyleRoot>
      <div className="App"> 
      <h1> Hi, I'am a React App   </h1>
      <p className={classes.join(' ')}>This is really working.</p>
      
      {/* <button 
      style={style}
      //onClick={this.switchNameHandler.bind(this, 'new one')}>Switch Name</button>
      onClick={this.togglePersonHandler}>Toggle Person</button> */}

      {/* <StyledButton
      alt={this.state.showPersons}
      onClick={this.togglePersonHandler}>Toggle Person</StyledButton> */}
      <button
        className={comclass.Button} onClick={this.togglePersonHandler}>
          Toggle Persons
      </button>
      {persons}
      {/* {<button onClick={() => this.switchNameHandler('new one' )}>Switch Name</button>  alter way: not prefered*/} 
      {/* {this.state.showPersons === true ? 
        <div>
          <Person 
            name={this.state.person[0].name} 
            age={this.state.person[0].age}/>
          <Person 
            name={this.state.person[1].name} 
            age={this.state.person[1].age} 
            click={this.switchNameHandler.bind(this, 'new two')}
            changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
          <Person 
            name={this.state.person[2].name} 
            age={this.state.person[2].age}/>
        </div>: null
      } */}
      </div>
      </StyleRoot>
    );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Dose this works now?'));
  }
}

export default App;

// const app = props =>  {
//   const [ personState, setPersonState ] = useState({
//     person: [
//       { name: 'Max', age: 28 },
//       { name: 'Max2', age: 24 },
//       { name: 'Max3', age: 25 }
//     ],
//     //othereState: 'something other value'
//   });

//   const [othereState, setOtherState] = useState('some other value')
//   console.log(personState,othereState)
//   const switchNameHandler = () => {
//     //console.log('Was Clicked!');
//     setPersonState({
//       person: [
//         { name: 'Maximum', age: 28 },
//         { name: 'Max2', age: 24 },
//         { name: 'Max3', age: 26 }
//       ],
//       //othereState: personState.othereState  Mannually adding state not to do this.
//     })
//   }

//   return (

//       <div className="App"> 
//       <h1> Hi, I'am a React App   </h1>
//       <p>This is really working.</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personState.person[0].name} age={personState.person[0].age}/>
//       <Person name={personState.person[1].name} age={personState.person[1].age}>My Hobbies: Racing</Person>
//       <Person name={personState.person[2].name} age={personState.person[2].age}/>
//       </div>
//     );
//     //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Dose this works now?'));
//   }


// export default app;



