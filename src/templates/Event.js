import React, {Component} from 'react';
import {Link} from 'react-router-dom';

let backendUrl = 'http://localhost:8080';

export default function Event(props) {
    
    let thumbnailImgSrc = `${backendUrl}/public/photos/${props.main_photos.square}`;

    

    return (
        <div className="card my-3" style={{width: "18rem"}}>
            <img src={thumbnailImgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.subTitle}</p>
                <Link to={`events/${props.id}`} className="btn btn-info">Enter Event</Link>
            </div>
        </div>
    )
}