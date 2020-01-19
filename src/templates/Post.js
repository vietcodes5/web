import React, {Component} from 'react';
import {calcDate} from '../helpers';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            html: "Loading",
            metadata: {
                title: "Loading...",
                author: "Loading...",
                date: "Loading..."
            },
            expanded: false
        };
        this.expand = this.expand.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:8080/posts/${this.props.postTitle}`)
        .then(res => res.json())
        .then(data => 
            this.setState({
                html: data.html,
                metadata: data.metadata
            })
        )
        .catch(console.log);
    }

    expand(e) {
        this.setState({expanded: true});
        e.target.remove();
    }

    render() {
        return (
            <div className="card text-center my-3" 
                style={{
                    maxHeight: (this.state.expanded) ? "2000px" : "400px"
                }}>
                <div className="card-header">
                    Posts
                </div>
                <div className="card-body text-left">
                    <h5 className="card-title">{this.state.metadata.title}</h5>
                    <div className="card-content" 
                        dangerouslySetInnerHTML={{ __html: this.state.html }}>
                    </div>
                </div>

                { // Expand button
                    this.expanded ?
                    null :
                    <div className="btn btn-info" 
                        onClick={this.expand}>Expand...</div>
                }

                <div className="card-footer text-muted">
                    <footer className="blockquote-footer">
                        Written by <cite title="Source Title">
                            {this.state.metadata.author} </cite>
                        <span>
                            {calcDate(this.state.metadata.date)}
                        </span>
                    </footer>
                </div>
            </div>
        )
    }
}