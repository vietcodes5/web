import React, { Component } from 'react';

let backendUrl = "http://localhost:8080";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.persist();
        this.setState(() => {
            return {
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch(`${backendUrl}/admin/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input id="username" type="text" name="username" 
                            value={this.state.username}
                            onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="password">Password: </label>
                        <input id="password" type="password" name="password" 
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}