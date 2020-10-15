import React, { Component } from 'react';
import './index.css';
import Clock from './clock';

class completeClock extends Component {
    render() {
        return (
            <div className="completeClock">
                <div className="clock">
                    <p style={{height: '0.1em'}}>Relógio</p>
                    <Clock />
                </div>
            </div>
        );}
    }
export default completeClock