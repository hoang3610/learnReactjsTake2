import React, {Component} from 'react';
import { NavLink, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';

class Product extends Component{
  render(){
      var {match} = this.props
      console.log(match)
      var products = [
        {
            id: 1,
            slug:'iphone-11-promax',
            name: "iphone 11 promax",
            price: 15000000,
            image: "https://techland.com.vn/wp-content/uploads/2019/09/dien-thoai-iphone-11-pro-max-4.jpg",
            status: true
        },
        {
            id: 2,
            slug:'iphone-13-promax',
            name: "iphone 13 promax",
            price: 2000000,
            image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2_2_2.png",
            status: true
        },
        {
            id: 3,
            slug:'iphone-x',
            name: "iphone x",
            price: 10000000,
            image: "https://muhalu.com/wp-content/uploads/2020/03/%C4%90i%E1%BB%87n-tho%E1%BA%A1i-Iphone-X-64Gb-Gi%C3%A1-t%E1%BB%91t-nh%E1%BA%A5t.jpg",
            status: true
        }
      ]
      var url = match.url;
      var element = products.map((product, index) => {
          return (
            <NavLink key={index} to={`${url}/${product.slug}`}>
                <li class="list-group-item">
                {product.name}
                </li>
            </NavLink>
          )
      })
      var {location} = this.props
      console.log(location)
    return (
      <div class="container">
          <h1>
            Danh sach san pham
          </h1>
          <div class="row">
              <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <ul class="list-group">
                      {element}
                  </ul>
              </div>
              <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <Route path="/product/:slug" component={ProductDetail} />
              </div>
          </div>
      </div>
    )
  }
}

export default Product;
