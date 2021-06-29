import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div className="navbar">
          <a className="navbar-brand" href="#">ComponentHeader</a>
          <ul className="nav navbar-nav">
              <li className="active">
                  <a href="#">Home</a>
              </li>
              <li>
                  <a href="#">Danh muc</a>
              </li>
          </ul>
      </div>
    );
  }
}

export default Header;
