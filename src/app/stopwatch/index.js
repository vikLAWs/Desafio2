import React, {Component} from 'react'

class StopWatch extends Component {
  
  state={
    horas: 0,
    cs: 0,
    segundos: 0,
    minutos: 0,
    running: false,
  };
  
  // state = {
  //   running: false,
  //   lapse: 0,
  // }

  // _now = 0
  _timer = null

  // handleRunClick = () => {
  //   if (this.state.running) {
  //     this.stop()
  //   } else {
  //     this.start()
  //   }
  // }

  // handleClearClick = () => {
  //   this.stop()
  //   this._now = 0
  //   this.setState({lapse: 0})
  // }

  // start() {
  //   this._timer = setInterval(() => {
  //     this.setState({
  //       lapse: Date.now() - this._now,
  //     })
  //   }, 1)

  //   this._now = Date.now() - this.state.lapse
  //   this.setState({running: true})
  // }

  // stop() {
  //   clearInterval(this._timer)
  //   this._timer = null
  //   this.setState({running: false})
  // }
  
  

  zerarCronometro() {
    this.setState({ 
      cs: 0
    })
    this.setState({ 
      segundos: 0
    })
    this.setState({ 
      minutos: 0
    })
    this.setState({ 
      horas: 0
    })
    
  }
  
  incrementar () {
    // this.setState(
    //   function (state, props) {
    //    if (state.cs >= 99){
    //      this.zerarCs();
    //      this.incrementarSeg(state);
    //    }  
    //    return({ cs: state.cs ++})
    //   })
    if(this.state.cs >= 99){
      this.zerarCs()
      this.incrementarSeg()
    }else{
      this.setState({ 
        cs: this.state.cs + 1
      })
    }
    
  }
    
  

  incrementarSeg () {
    if(this.state.segundos >= 59){
      this.zerarS()
      this.incrementarMinuto()
    }else{
      this.setState({ 
        segundos: this.state.segundos + 1
      })
    }
  }
  
  incrementarMinuto () {
    if(this.state.minutos >= 59){
      this.zerarM()
      this.incrementarHora()
    }else{
      this.setState({ 
        minutos: this.state.minutos + 1
      })
    }
  }
  incrementarHora () {
    this.setState({ 
      horas: this.state.horas + 1
    })
  }
  
  zerarM () {
    this.setState({ 
      minutos: 0
    })
  }

  zerarS () {
    this.setState({ 
      segundos: 0
    })
  }

  zerarCs () {
    this.setState({ 
      cs: 0
    })
  }
  

  handleRunClick = () => {
    if (this.state.running) {
      this.stop()
    } else {
      this.start()
    }
  }

  start() {
    this._timer = setInterval(() => {
      this.incrementar()
    }, 10)
    
    this.setState({running: true})
  }

  stop() {
    clearInterval(this._timer)
    this._timer = null
    this.setState({running: false})
  }

  handleClearClick = () => {
    this.stop()
    this.zerarCronometro()
  }

  render() {
    const buttonStyles = {
      border: '1px solid #ccc',
      background: '#fff',
      fontSize: '1em',
      padding: '15px',
      margin: '0 5px',
      width: '200px',
    }
    return (
      <div style={{textAlign: 'center'}}>
        <label style={{fontSize: '2em', display: 'block'}}><h1>{this.state.horas}h:{this.state.minutos}m:{this.state.segundos}s:{this.state.cs}</h1></label>
        <button style={buttonStyles} onClick={this.handleRunClick}>{this.state.running ? 'Parar' : 'Iniciar'}</button>
        <button style={buttonStyles} onClick={this.handleClearClick}>Restaurar</button>
      </div>
    )
  }
}

export default StopWatch
