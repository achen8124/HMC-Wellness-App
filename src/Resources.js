import React from 'react';
// import ReactDOM from 'react-dom';
// import './App.css';
import {App, NavBar} from './App';

class Resources extends React.Component {
    
    render() {
        const name = "Resources"
        return (
            <div>
                <h1> Resources </h1>
                <NavBar />
            </div>
        );
    }
}

export {Resources};