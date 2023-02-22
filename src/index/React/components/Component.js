// Component Example

// ====== IMPORTS ======
import React, { Component } from 'react';

// ====== DEFINITIONS ======

function FunctionalComponent (props) {

    function localClickFunction (title) {
        console.log('You clicked a ' + title)
    }

    return (
        <div>
            <p>{props.title}</p>
            <button onClick={localClickFunction.bind(this, props.title)}>Click Me</button>
        </div>
    );
}

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            counter: 0,
        }

        this.localClickFunction = this.localClickFunction.bind(this);

    }

    localClickFunction(title) {
        console.log('You clicked a ' + title);
    }


    render() {
        return (
            <div>
                <p>I'm a class component!</p>
                <button onClick={this.localClickFunction.bind(this, this.props.title)}>Click Me</button>
            </div>
        );
    }
}


// ====== EXPORTS ======

export {
    FunctionalComponent,
    ClassComponent
}