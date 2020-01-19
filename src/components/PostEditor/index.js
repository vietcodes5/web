import React from 'react';
import showdown from 'showdown';
// import {showdown_config} from '../../config.json';


// let converter = new showdown.Converter(showdown_config);
showdown.setFlavor('github');
let converter = new showdown.Converter();

class PostEditor extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            content: '',
        }

        this.onTextChange = this.onTextChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onTextChange = e => {
        e.persist();
        // console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onFormSubmit = e => {
        e.preventDefault();

        console.log(this.state);
    }

    render() {
        return (
            <div className="container-fluid bg-light">
                <div className="row justify-content-between">
                    <Editor
                        onFormSubmit={this.onFormSubmit}
                        onChange={this.onTextChange} 
                        content={this.state.content}/>
                    <View content={this.state.content} title={this.state.title} />
                </div>
            </div>
        )
    }
}

export default PostEditor;

function Editor(props) {
    return (
        <div className="col-lg-6 p-2">
            <h1>
                Editor
                <div className="btn btn-info" style={{float: 'right', height: '100%'}}>Usage</div>
            </h1>

            <div>

            </div>

            <div className="mt-2">
                <form onSubmit={props.onFormSubmit}>
                    <input type="text" placeholder="Post title"
                        name="title"
                        onChange={props.onChange} value={props.title} />

                    <textarea className="w-100" rows="25"
                        onChange={props.onChange} value={props.content}
                        name="content"
                        placeholder="Post content"></textarea>
                    <button type="submit">Post</button>
                </form>
            </div>
        </div>
    )
}

function View(props) {
    return(
        <div className="col-lg-6 p-2" style={{minWidth: '400px'}}>
            <h1>View</h1>
            <div className="card text-center my-3"
                style={{
                    maxHeight: '2000px'
                }}>
                <div className="card-header">
                    News
                </div>


                <div className="card-body text-left">
                    <h5 className="card-title">{props.title}</h5>
                    <div className="card-content"
                        dangerouslySetInnerHTML={{ __html: converter.makeHtml(props.content) }}>
                        
                    </div>
                </div>



                <div className="card-footer text-muted">
                    <footer className="blockquote-footer">
                        Written by <cite title="Source Title">
                            duc0905</cite>
                        <span>
                            2019
                        </span>
                    </footer>
                </div>
            </div>
        </div>
    )
}
