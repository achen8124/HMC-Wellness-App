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
            <h1>uh oh</h1>
            <button onClick={function() {ReactDOM.render(<Calendar />, document.getElementById('root'))}}> Go to home </button>
            <NavBar />
        </div>
        );
    }
}

const Calendar = () => {
    return (
        <div>
            <h1> Calendar? </h1>
            <button onClick={function() {ReactDOM.render(<App />, document.getElementById('root'))}}> Go to calendar </button>
        </div>
    )
}

const NavBar = () => {
    return (
        <div>
            <p>let's implement this later</p>
        </div>
    )
}

export {App, Calendar, NavBar}