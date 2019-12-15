import React, {Component} from 'react';
import Event from '../templates/Event.js';

export default class Events extends Component{
    constructor(props) {
        super(props);
        this.state = {events: []};
    }

    componentDidMount() {
        fetch("http://localhost:8080/events")
        .then(res => res.json())
        .then(data => {
            let events = data.map((name, i) => 
                <Event name={name} key={`event-${i}`} />
            );
            this.setState({events});
        })
        .catch(console.log);
    }

    render() {
        return (    
            <div className="bg-light" id="events">
                <div className="jumbotron border">
                    <div className="container">
                        <h1 className="display-4">Events</h1>
                        <p className="lead">Our past and upcoming events.</p>
                    </div>
                </div>
                <div className="row justify-content-around">
                    {this.state.events}
                </div>
            </div>
        );
    }
}