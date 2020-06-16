import React from 'react';

// Functional component
// const withClass = props => (
// <div className={props.classes}>{props.children}</div>
// );

//Regular java script function
const withClass = (WrappedComponent, className) => {
    //Functional component
    return props => (
    <div className={className}>
        <WrappedComponent {...props}/>
    </div>
    );
};

export default withClass



