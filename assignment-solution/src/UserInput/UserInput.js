import React from 'react';

const userInput =(props) => {
    const inputstyle = {
        border: '2px solid'
    };
    return <input type="text" 
                  style={inputstyle}
                  onChange={props.changed}
                  value={props.currentName}/>;
};

export default userInput