import React, {Component} from 'react'
import logo from './logo.svg'
import './index.css'
import StopWatch from './stopwatch'
import Timer from './timer'
import Clock from './clock'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Desafio 2</h1>
        </div>
        <div>
          <Clock />
        </div>
        <div style={{justifyContent: 'center', display: 'flex', backgroundColor: 'purple', paddingBottom: 40}}>
          <div>
            <h3 style={{fontSize: 40}}>Cronômetro</h3>
            <StopWatch />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'black', paddingBottom: 40}}>
          <div>
            <h3 className="font">Temporizador (Segundos)</h3>
            <Timer /> 
          </div>
          
        </div>
      </div>
    )
  }
}

export default App
