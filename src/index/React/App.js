// Main app


// ====== IMPORTS ======

// React
import React from 'react';
import { ClassComponent, FunctionalComponent }  from './components/Component.js';


// ====== FUNCTIONS ======

// Main app function 
function App (props) {

    return (
        <div id="reactApp">
            <h1>{props.title}</h1>
            <FunctionalComponent title="Functional Component" />
            <ClassComponent title="Class Component" />
        </div>
    );
}

// ====== EXPORTS ======

export {
    App
}