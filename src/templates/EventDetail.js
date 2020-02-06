import React,{Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router-dom'

export default class EventDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            curentEvent : {},
            events: ``,
        }

    }

    componentDidMount(){
        
        fetch(`http://localhost:8080/events/${this.props.match.params.id}`).then(res => {
            return res.json()
        }).then((data) => {
                console.log(data);
            this.setState({ curentEvent: data,})
            
            }
        );
        fetch(`http://localhost:8080/events`).then(res =>{
            return res.json();
        }).then((data) =>{
            console.log(data);
            
            let events = data.events.map((event,i)=>{
                if(event._id!= this.state.curentEvent._id){
                    return <EventChild 
                    id={event._id} 
                    title={event.title} 
                    date={event.date} 
                    key={`event-${i}`}/>
                }
            })
            this.setState({events})
        })

    }
    render(){
        return(
            <div className="row">
                <div className="col-8">
                    <h1>{this.state.curentEvent.title}</h1>
                    <p>Đang diễn ra:</p>
                    <p>Time: <span>{this.state.curentEvent.date}</span></p>
                    <ReactMarkdown source={this.state.curentEvent.markdown}/>
                </div>
                <div className="col-4 bg-light p-4 shadow">
                    <h2>Các sự kiện khác:</h2>
                    {this.state.events}
                    
                </div>

            </div>
        )
    }
}
function EventChild(props){
    return(
        <div className="border-bottom border-white p-2 ">
            <div className="title">
                <a href={`${props.id}`} ><h6>{props.title}</h6></a>
            </div>
            <div className="event-detail">
                <span>Date: {props.date}</span> 
            </div>
        </div>
    )
}