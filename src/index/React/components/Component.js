// Component Example

// ====== IMPORTS ======
import React, { Component, useState } from 'react';

// ====== DEFINITIONS ======

function FunctionalComponent (props) {

    // Setup a counter
    const [count, setCount] = useState(1);

    function countUp () {
        setCount(count + 1);
        console.log(count + ' times');
    }

    function localClickFunction (title) {
        console.log('You clicked a ' + title)
        countUp();
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
        this.countUp = this.countUp.bind(this);

    }

    countUp() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    localClickFunction(title) {
        console.log('You clicked a ' + title);
        console.log('Counter: ' + this.state.counter);
        this.countUp();
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