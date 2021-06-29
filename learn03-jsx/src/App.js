import React, {Component} from 'react';
import './App.css';

// jsx su ly giao dien 
class App extends Component {
  render() {
    var content = "JSX";
    return (
      <div>
        <nav class="navbar navbar-inverse">
          <a class="navbar-brand" href="#">Jsx</a>
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">Trang chu</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </nav>
      <div>
        <h2>noidung : {content}</h2>
      </div>
      </div>
    );
  }
}

export default App;
