import React, {Component} from 'react'
import {button as buttonStyles} from './styles'
import {inputStyles as inputStyles} from './styles'
import {inputStyles2 as inputStyles2} from './styles'
import {colorLabel as colorLabel} from './styles'
class Timer extends Component {
  state = {
    time: 0,
    running: false,
  }

  _timer = null
  _lastEnteredTime = 0

  handleChange = ({target: {value}}) => {
    this._lastEnteredTime = Number(value)
    this.reset()
  }

  handleRunClick = () => {
    if (this.state.running) {
      this.stop()
    } else {
      this.start()
    }
  }

  handleClearClick = () => {
    this.stop()
    this.reset()
  }

  start() {
    this._timer = setInterval(() => {
      const {time} = this.state
      const newTime = time - 1
      if (newTime < 0) {
        this.stop()
        this.reset()
      } else {
        this.setState({time: newTime})
      }
    }, 1000)

    this.setState({running: true})
  }

  stop() {
    clearInterval(this._timer)
    this._timer = null
    this.setState({running: false})
  }

  reset() {
    this.setState({time: this._lastEnteredTime})
  }

  render() {
    const {time, running} = this.state
    
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{maxWidth: 400, margin: 'auto'}}>
          {time === 0
          ? <div> <input style={inputStyles2} onChange={this.handleChange} value={time || "0"} type="number" /> <h5 style={colorLabel}>Acabou o Tempo !!!</h5></div>
          : <div> <input style={inputStyles} onChange={this.handleChange} value={time || "0"} type="number" /> <h5 style={{color: 'purple'}}>Tempo Restante</h5></div>
          }
        </div>
        
        <button style={buttonStyles} onClick={this.handleRunClick} data-test="toggle">{running ? 'Parar' : 'Reproduzir'}</button>
        <button style={buttonStyles} onClick={this.handleClearClick} data-test="clear">Recomeçar</button>
      </div>
    )
  }
}

export default Timer
