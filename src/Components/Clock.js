import React, { Component } from 'react';
import format from 'date-fns/format';


export default class Clock extends Component {
    state = {
        time: "00:00:00h",
        timeInterval: "",
    }
componentDidMount() {

let timeInterval = setInterval(() => {
    let currentTime = format(new Date(), 'hh:mm:ss a')
    this.setState({
        time: currentTime,
    })
    
},1000)

this.setState({
    
        timeInterval
    })



}
componentWillUnmount() {
    clearInterval(this.state.timeInterval)
}

    render(){
        const {time} = this.state
        return (
            <div>
            <h1> {time} </h1>
            </div>
        )
    }
}   

