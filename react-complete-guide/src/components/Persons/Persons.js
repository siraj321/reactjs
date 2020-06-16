import React,{PureComponent} from 'react';
import Person from './Person/Person';
//import { stat } from 'fs-extra';


//const persons = (props)  => { // functional component
// classbased component
class Persons extends PureComponent{ 
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    /*componentWillReceiveProps(nextProps,nextState){
        console.log('[Persons.js] componentWillReveiveProps');
    }*/

/*shouldComponentUpdate(nextProps,nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons || 
        nextProps.changed !== this.props.changed || 
        nextProps.click !== this.props.clicked
    ){
        return true;
    }else{
        return false;
    }
    //return true;
}*/

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message:'Snapshot!'};
}

/*componentWillUpdate(){
    console.log('[Persons.js] compnentWillUpdate');
}*/

componentDidUpdate(prevProps, prevState, Snapshot){
    console.log('[Person.js] componentDidUpdate');
    console.log(Snapshot);
}

componentWillUnmount(){
    console.log('[Person.js] componentWillUnmount');
}

    render(){
        console.log('[Persons.js] rendering...');

    return this.props.persons.map((per, index) => {
        return (<Person 
                  click={() => this.props.clicked(index)}
                  name={per.name}
                  age={per.age}
                  key={per.id}
                  changed={(event) => this.props.changed(event,per.id)}
                />
        );
                 
    });

            
    }
    /*return props.persons.map((per, index) => {
        return <Person 
                  click={() => props.clicked(index)}
                  name={per.name}
                  age={per.age}
                  key={per.id}
                  changed={(event) => props.changed(event,per.id)}/>
                 
    });*/

}

export default Persons;