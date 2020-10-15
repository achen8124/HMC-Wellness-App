import React from 'react';
import ReactDOM from 'react-dom'
import './App.css'
import {Reminders} from './Reminders.js';
import {Resources} from './Resources.js';
import {Exercises} from './Exercises.js';
import {Settings} from './Settings.js';


class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="main-container">
                <h1>Home Page</h1>
                <NavBar />
            </div>
        );
    }
}


const NavBar = () => {
    return (
        <div>
            <button onClick={function() {
                ReactDOM.render(<App />, document.getElementById('root'))
                }}> Home Page 
            </button>
            <button onClick={function() {
                ReactDOM.render(<Reminders />, document.getElementById('root'))
                }}> Reminders 
            </button>
            <button onClick={function() {
                ReactDOM.render(<Resources />, document.getElementById('root'))
                }}> Resources 
            </button>
            <button onClick={function() {
                ReactDOM.render(<Exercises />, document.getElementById('root'))
                }}> Exercises 
            </button>
            <button onClick={function() {
                ReactDOM.render(<Settings />, document.getElementById('root'))
                }}> Settings 
            </button>
        </div>
    )
}

export {App, NavBar}