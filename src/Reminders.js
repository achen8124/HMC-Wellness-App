import React from 'react';
// import ReactDOM from 'react-dom';
// import './App.css';
import {App, NavBar, Header} from './App';

class Reminders extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header name = "Reminders" />
                <NavBar />
            </div>
        );
    }
}

export {Reminders};