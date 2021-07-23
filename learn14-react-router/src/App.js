import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import routes from './routes';
import './App.css';

class App extends Component{
  render(){
    return (
        <Router>
            <div>
                {/* Menu */}
                <Menu />
                {/* nội dung */}
                <Switch>
                    {this.showContentMenus(routes)}
                </Switch>
            </div>
        </Router>
    )
  }
  showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0 ){
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
      })
    }
    return result;
  }
}

export default App;
