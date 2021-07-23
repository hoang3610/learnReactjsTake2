import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtUserName: '',
            txtPassword: ''
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onLogin = (e) => {
        e.preventDefault();
        var { txtPassword, txtUserName } = this.state;
        if (txtUserName === 'admin' && txtPassword === "admin") {
            localStorage.setItem("user", JSON.stringify({
                username: txtUserName,
                password: txtPassword
            }))
        }
    }
    render() {
        // var { txtPassword, txtUserName } = this.state;
        var loggedInUser = localStorage.getItem("user");

        if (loggedInUser !== null) {
            var { location } = this.props
            return <Redirect to={{
                pathname: 'product',
                state: {
                    from: location
                }
            }} />
        }
        return (
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <form onSubmit={this.onLogin}>
                        <div className="form-group">
                            <label for="">user Name:</label>
                            <input type="text" name="txtUserName" onChange={this.onChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="">Password</label>
                            <input type="password" name="txtPassword" onChange={this.onChange} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default About;
