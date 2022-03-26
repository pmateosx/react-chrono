import React, { Component } from 'react'

class Counter extends Component {
    state = {
        counter: 0,
    }

    intervalId = null;
    
    handleIncrement = () => {
        this.intervalId = setInterval(() => {
            this.setState({
                counter: this.state.counter +1
            })
        }, 1000)
        
    }
    

    handleReset = () => {
        clearInterval(this.intervalId);
        this.setState({counter: 0})
    }

    handlePause = () => {
        clearInterval(this.intervalId)
    }

    parseTime = () => {
        let mins = Math.floor(this.state.counter / 60);
        let secs = this.state.counter - (mins * 60);

        if(secs < 10){
            secs = `0${secs}`
        }

        return `0${mins} : ${secs}`
    }

    render(){
        return(
            <div>
                <div>
                    <p>{this.parseTime()}</p>
                    <button onClick={this.handleIncrement}>Start</button>
                    <button onClick={this.handlePause}>Pause</button>
                    <button onClick={() => this.handleReset()}>Reset</button>
                </div> 
            </div>
        )
    }
}
export default Counter