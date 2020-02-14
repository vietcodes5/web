import React, {Component} from 'react';
import {calcDate} from '../helpers';

import showdown from 'showdown';
showdown.setFlavor('github');
let converter = new showdown.Converter();

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
        this.expand = this.expand.bind(this);
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
                    {this.props.post.title}
                </div>
                <div className="card-body text-left">
                    <div className="card-content" 
                        dangerouslySetInnerHTML={{ __html: converter.makeHtml(this.props.post.markdown) }}>
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
                            {this.props.post.author} </cite>
                        <span>
                            {calcDate(this.props.post.date)}
                        </span>
                    </footer>
                </div>
            </div>
        )
    }
}