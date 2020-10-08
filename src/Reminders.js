import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {App, NavBar} from './App';

class Reminders extends React.Component {
    render() {
        return (
            <div>
                <h1> Reminders </h1>
                <NavBar />
            </div>
        );
    }
}

export {Reminders};