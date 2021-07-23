import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'Trang chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Giới thiệu',
    to: '/about',
    exact: false
  },
  {
    name: 'Liên hệ',
    to: '/contact',
    exact: false
  },
  {
    name: 'Tours',
    to: '/tours',
    exact: false
  },
  {
    name: 'Danh Sach sp',
    to: '/product',
    exact: false
  },
]

const MenuLink =  ({lable, to, activeOnlyWhenExact}) => {
  return  (
     <Route path={to} exact={ activeOnlyWhenExact} children={({match})=>{
          var active = match ? ' abc' : '';
          return (
              <li className={active}>
                  <Link  to={to} >{lable}</Link>
              </li>
          )
      }}>
      </Route> 
  )
}

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
          {/* <MenuLink lable="Trang Chủ" to="/" activeOnlyWhenExact={true} /> */}
          {this.showMenus(menus)}
        </ul>
      </nav>
    )
  }
  showMenus = (menus) => {
    var result = null;
    if(menus.length > 0){
      result = menus.map((menu, index) => {
        return <MenuLink lable={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact}/>
      })
    }
    return result;
  }
}

export default Menu;
