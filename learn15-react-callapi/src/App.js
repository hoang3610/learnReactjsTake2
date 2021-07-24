import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <div className="container">
                        <div class="row">
                            {this.showContentMenus(routes)}
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                    key={index}
                />
            })
        }
        return <Switch>{result}</Switch>;
    }
}

export default App;
