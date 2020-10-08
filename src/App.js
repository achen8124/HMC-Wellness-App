import React from 'react';
import ReactDOM from 'react-dom'
import './App.css'


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

class Reminders extends React.Component {
    render() {
        return (
            <div>
                <h1> Reminders? </h1>
                <NavBar />
            </div>
        );
    }
}

class Resources extends React.Component {
    render() {
        return (
            <div>
                <h1> Resources </h1>
                <NavBar />
            </div>
        );
    }
}

class Exercises extends React.Component {
    render() {
        return (
            <div>
                <h1> Exercises </h1>
                <NavBar />
            </div>
        );
    }
}

class Settings extends React.Component {
    render() {
        return (
            <div>
                <h1> Settings </h1>
                <NavBar />
            </div>
        );
    }
}


const NavBar = () => {
    return (
        <div>
            <p>let's implement this later</p>
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