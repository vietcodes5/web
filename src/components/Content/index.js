import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from '../../pages/about.js'
import Home from '../../pages/home.js'
import Events from '../../pages/events.js'
import EventDetail from '../../templates/EventDetail'
import Posts from '../../pages/posts.js'
import EditPost from '../../pages/admin/edit_post.js'
import Login from '../../pages/admin/login.js'

export default function Content(props) {
    return (
        <div className="container" style={{
            minHeight: "90vh",
            marginTop: "80px"}}>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/posts" component={Posts} />
                <Route path="/events/:id" component={EventDetail} />
                <Route path="/events" component={Events} />
                <Route path="/edit-post" component={EditPost} />
                <Route path="/admin/login" component={Login} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}

function Event(props) {
    return (
        <div>
            {props.match.params.name}
        </div>
    )
}