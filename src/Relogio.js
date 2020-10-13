import React, { Component } from 'react';
import './App.css'

class Relogio extends React.Component{
    constructor() {
        super()
        this.state={time:new Date()}
    }

    currentTime()
    {
        this.setState({
            time: new Date()
        })
    }
    componentWillMount()
    {
        setInterval(()=>this.currentTime(), 1000)
    }

    render(){
        return (
            <div class="container">
                <h1>
                    {this.state.time.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

export default Relogio