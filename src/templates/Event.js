import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {name: props.name};
    }

    render() {
        let src = `http://localhost:8080/events/${this.state.name}/photo/main/main-square.jpg`;
        return (
            <div className="card my-3" style={{width: "18rem"}}>
                <img src={src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.state.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/" className="btn btn-info">Go somewhere</Link>
                </div>
            </div>
        )
    }
}
