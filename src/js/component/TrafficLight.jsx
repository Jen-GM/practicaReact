import React from 'react';

export default class TrafficLight extends React.Component{
    
    constructor(){
        super();
        this.state = {
            clickedLight: null
        };
    }
    
    render(){        
        let redString = "";
        if(this.state.clickedLight === 'red') redString = 'selected';
        let yellowString = "";
        if(this.state.clickedLight === 'yellow') yellowString = 'selected';
        let greenString = "";
        if(this.state.clickedLight === 'green') greenString = 'selected';
        
        return <div>
            <div id="trafficTop"></div>
            <div id="container">
                <div className={"red light " + redString} onClick={() => this.setState({clickedLight: 'red'})}></div>
                <div className={"yellow light " + yellowString} onClick={() => this.setState({clickedLight: 'yellow'})}></div>
                <div className={"green light " + greenString} onClick={() => this.setState({clickedLight: 'green'})}></div>
            </div>
        </div>
    }

}