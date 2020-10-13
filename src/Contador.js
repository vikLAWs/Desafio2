import React from 'react'
import Botao from './Botao'
import LabelCronometro from './LabelCronometro'
import './App.css'


class Contador extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            horas: 0,
            minutos: 0,
            segundos: 0,
            centesimos: 0,
            pause: false,
            namePause: "Pause",
            parcial: "",
        }
    }


   //----INCREMENTAR--------
    incrementarCentesimos(){
        this.setState(
            (state) => {
                if(this.state.pause==false){
                    if (state.centesimos >= 99){
                        this.zerarCentesimos()
                        this.incrementarSegundos()
                    }
                    return({centesimos: state.centesimos ++})
                }    
            }

        )
    }

    incrementarSegundos(){
        this.setState(
            (state) => {
                if(this.state.pause==false){
                    if (state.segundos >= 60){
                        this.zerarSegundos()
                        this.incrementarMinutos()
                    }
                    return({segundos: state.segundos ++})
                }    
            }

        )
    }

    incrementarMinutos(){
        this.setState(
            (state) => {
                if(this.state.pause==false){
                    if (state.minutos >= 60){
                        this.zerarMinutos()
                        this.incrementarHoras()
                    }
                    return({minutos: state.minutos ++})
                }    
            }

        )
    }

    incrementarHoras(){
        this.setState(
            (state) => {
                if(this.state.pause==false)
                    return({horas: state.horas ++})    
            }

        )
    }


    //------ZERAR-------
    zerarCentesimos(){
        this.setState({centesimos: 0})
    }

    zerarSegundos(){
        this.setState({segundos: 0})
    }

    zerarMinutos(){
        this.setState({minutos: 0})
    }

    //--------INCREMENT---------



    zerarCronometro(){
        this.setState({
            horas: 0,
            minutos: 0,
            segundos: 0,
            centesimos: 0
        })
    }

    pararTempo(){
        this.setState({
            pause: !this.state.pause
        })
        if (this.state.pause)
                {this.setState({
                    namePause: "Pause"         
                })}
            else
                {this.setState({
                    namePause: "Play"         
            })}     
    }

    parciais(){
        let p = this.state.horas + ":" + this.state.minutos + ":" + this.state.segundos + "." + this.state.centesimos
        this.setState({
            parcial : this.state.parcial + " -> " + p
        })
    }

    componentDidMount(){
        this.timer = setInterval( () => this.incrementarCentesimos(), 10)
    }

    render(){
        return(
            <div class="container">
                    <h1>{this.state.horas}:{this.state.minutos}:{this.state.segundos}.{this.state.centesimos}</h1>
                    <Botao onClick={() => { this.zerarCronometro()}} label="Stop" />
                    <Botao onClick={() => { this.pararTempo()}} label={this.state.namePause} />
                    <Botao onClick={() => { this.parciais()}} label="Parcial" />
                    <LabelCronometro name={this.state.parcial} />
            </div>
        )
    }
}

export default Contador