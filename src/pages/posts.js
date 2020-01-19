import React, {Component} from 'react';
import Post from '../templates/Post.js';

export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {posts: []};
    }

    componentDidMount() {
        fetch("http://localhost:8080/posts")
        .then(res => res.json())
        .then(data => {
            let posts = data.map((title, i) =>
                <Post
                    key={`post-${i}`}
                    postTitle={title}
                />
            );
            this.setState({posts});
        })
        .catch(console.log);
    }

    render() {
        return (
            <div>
                <div className="jumbotron border">
                    <div className="container">
                        <h1 className="display-4">News</h1>
                        <p className="lead">Stay updated with the world!</p>
                    </div>
                </div>
                <div id="posts">
                    {this.state.posts}
                </div>
            </div>
        );
    }
}