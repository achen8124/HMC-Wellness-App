import React from 'react';
import ReactDOM from 'react-dom'
import './App.css'
export {App, Calendar}

const App = () => {
    return (
        <div className="main-container">
            <h1>uh oh</h1>
            <button onClick={function() {ReactDOM.render(<Calendar />, document.getElementById('root'))}}> Go to home </button>
        </div>
    );
}

const Calendar = () => {
    return (
        <div>
            <h1> Calendar? </h1>
            <button onClick={function() {ReactDOM.render(<App />, document.getElementById('root'))}}> Go to calendar </button>
        </div>
    )
}
