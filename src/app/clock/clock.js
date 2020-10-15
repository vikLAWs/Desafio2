import React, { Component } from 'react';
import './clock.css';

class Clock extends Component {
    
    constructor(props){
    super(props);
    this.state ={
        time: new Date().toLocaleTimeString(),
        
        }
    }

    

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
        this.setState({
        time: new Date().toLocaleTimeString()   
    });
    }

    selectClock(botao){
        if (botao === 1) {
            this.setState({ 
                clock: 1
            })
        }
        else {
            if (botao === 2) {
                this.setState({ 
                    clock: 2
                })
            } else {
                this.setState({ 
                    clock: 3
                })
            }
        } 
      }

    render() {
    
        const buttonStyles = {
            border: '1px solid purple',
            fontSize: 20,
            padding: '15px',
            margin: '0 5px',
            width: '200px',
            background: 'purple',
            color: 'balck'
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
        const {clock} = this.state 

    return (
        

        <div className="Time">
        <p style={{display: 'block', height: '0.1em'}}> {this.state.time}</p>
        <div>
        {clock === 1
          ? <button style={buttonStylesSelected} onClick={this.selectClock(1)}>Nova Iorque</button>
          : <button style={buttonStyles} onClick={this.selectClock(1)}>Nova Iorque</button>
        }
        
        {/* <button style={buttonStylesSelected} onClick={this.handleClearClick}>Nova Iorque</button> 
        <button style={buttonStyles} onClick={this.handleClearClick}>Tóquio</button>  */}
        </div>
        </div>
    
    );
    }
    }

export default Clock;