import React, { Component } from 'react';
//import React, { useState } from 'react';
import comclasses from './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
//import person from './Person/Person';
//import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary/ErroBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import { ThemeConsumer } from 'styled-components';
//import WithClass from '../hoc/WithClass'; // As component
import withClass from '../hoc/withClass'; //as function
import Aux from '../hoc/Auxilary';

// const StyledButton = styled.button`
// background-color: ${props => props.alt ? 'red' : 'green'};
// font: white; 
// border: 1px solid blue;
// padding: 8px;
// cursor: pointer;

// &:hover: {
//   background-color: lightgreen;``
//   color: black;
// }
// `;

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] construactor');
    // this.state =  we can define state here as well
  }
  state = {
    persons: [
      { id: 'id1', name: 'Max', age: 28 },
      { id: 'id2', name: 'Max2', age: 24 },
      { id: 'id3', name: 'Max3', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  // life cycle method
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps',props)
    return state;
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked!');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Max2', age: 24 },
        { name: 'Max3', age: 26 }
      ] 
    })
  }

  //lifecycle method
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  // componentWillMount(){
  //   console.log('[App.js] componentWillMout');
  // }

  componentDidUpdate(){
       console.log('[App.js] componentDidUpdate');
   }
   shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
}

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState,props) =>{
      return {
        persons:persons, 
        changeCounter: prevState.changeCounter + 1
      };
    });


    /*this.setState({
      persons: [
        { name: 'name one', age: 28 },
        { name: event.target.value, age: 24 },
        { name: 'Max3', age: 27 }
      ] 
    })*/
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})

  }
  render() {
    console.log('[App.js] rander')
    // const style = {
    //   backgroundColor: 'green',
    //   font: 'white',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }

    // };
    //let btnClass = [comclass.Button];
    
    // cockpit move
    //let btnClass = '';

    //let persons = this.state.persons;
    let persons = null;

    
    if (this.state.showPersons) {
      persons = 
           //( for cockpit
        //<div> for cockpit not require
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler} />;
          {/* {this.state.persons.map((per, index) =>{
            return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={per.name}
                      age={per.age}
                      key={per.id}
                      changed={(event) => this.nameChangeHandler(event,per.id)}/>
                        // return <ErrorBoundary key={per.id}><Person 
                        // click={() => this.deletePersonHandler(index)}
                        // name={per.name}
                        // age={per.age}
                        // key={per.id}
                        // changed={(event) => this.nameChangeHandler(event,per.id)}/></ErrorBoundary>
          })}  */}
        //</div>
      //); for cockpit

      // style.backgroundColor = 'red'
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      //btnClass.push(comclass.Red);
      
      // move to cockpit
      //btnClass = comclass.Red;
    }
    //let classes = ['red','bold'].join(' ')

    /* move to cockpit
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push(comclass.red);
    }

    if(this.state.persons.length <= 1){
      classes.push(comclass.bold);
    } */

    return (

      <StyleRoot>
      
      <Aux> 
      {/* <WithClass classes={comclass.App}>  */}
      
      {/* <div className={comclass.App}>  */}
      
      <button
         onClick={() => {
           this.setState({showCockpit:false});
         }}
       >Remove Cockpit
       </button>
       {this.state.showCockpit ? (
      <Cockpit  title={this.props.appTitle }
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length} 
                clicked={this.togglePersonHandler}/>
        ): null }
      {/* move to cockpit
          <h1> Hi, I'am a React App   </h1>
      <p className={classes.join(' ')}>This is really working.</p> */}
      
      {/* <button 
      style={style}
      //onClick={this.switchNameHandler.bind(this, 'new one')}>Switch Name</button>
      onClick={this.togglePersonHandler}>Toggle Person</button> */}

      {/* <StyledButton
      alt={this.state.showPersons}
      onClick={this.togglePersonHandler}>Toggle Person</StyledButton> */}
      {/* <button
        className={btnClass.join(' ')} onClick={this.togglePersonHandler}> */}
      
      {/* move to cockpit 
       <button
        className={btnClass} onClick={this.togglePersonHandler}>
          Toggle Persons
      </button>
       */} 
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
      {/* </div> */}
      {/* </WithClass> */}
      </Aux>
      </StyleRoot> 
    );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Dose this works now?'));
  }
}

//export default App;
export default withClass(App, comclasses.App);

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



