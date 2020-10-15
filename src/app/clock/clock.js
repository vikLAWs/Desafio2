import React, { Component } from 'react';
import './clock.css';

class Clock extends Component {
    
    constructor(props){
    super(props);
    this.state ={
        time: new Date().toLocaleTimeString(),
        
        }
    }

    fuso = 2

    componentDidMount() {
        this.intervalID = setInterval(() =>
        this.updateClock(),
        1000
    );
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    updateClock(){
        if (this.fuso === 2) {
            this.setState({
                time: new Date().toLocaleTimeString()   
            });
        } 
        else {
            if (this.fuso === 3 ) {
                this.setState({
                    time: new Date().toLocaleTimeString('pt-BR', { timeZone: 'Europe/London' })  
                });
            } 
            else {
                this.setState({
                    time: new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Vancouver' })
                });
            }

            
        }
    }

    selecionarFusoNY = () => {
        this.fuso = 1
    }
    selecionarFusoBrasilia = () => {
        this.fuso = 2
    }
    selecionarFusoToquio = () => {
        this.fuso = 3
    }

    render() {
    
        const buttonStyles = {
            border: '1px solid purple',
            fontSize: 20,
            padding: '15px',
            margin: '0 5px',
            width: '200px',
            background: 'purple',
            color: 'black'
        }
        const buttonStylesSelected = {
            border: '1px solid purple',
            fontSize: 20,
            padding: '15px',
            margin: '0 5px',
            width: '200px',
            background: 'black',
            color: 'purple'
        }
        
        var fuso = this.fuso 

    return (
        

        <div className="Time">
        <p style={{display: 'block', height: '0.1em'}}> {this.state.time}</p>
        <div>
        {fuso === 1
          ? <button style={buttonStylesSelected} onClick={this.selecionarFusoNY}>Vancouver, BC, Canadá (GMT-7)</button>
          : <button style={buttonStyles}  onClick={this.selecionarFusoNY}>Vancouver, BC, Canadá (GMT-7)</button>
        }
        {fuso === 2
          ? <button style={buttonStylesSelected} onClick={this.selecionarFusoBrasilia}>Brasília - DF (GMT-3)</button>
          : <button style={buttonStyles} onClick={this.selecionarFusoBrasilia}>Brasília - DF (GMT-3)</button>
        }
        {fuso === 3
          ? <button style={buttonStylesSelected} onClick={this.selecionarFusoToquio}>Londres, Reino Unido (GMT+1)</button>
          : <button style={buttonStyles} onClick={this.selecionarFusoToquio}>Londres, Reino Unido (GMT+1)</button>
        }
        </div>
        </div>
    
    );
    }
    }

export default Clock;