import React, {Component} from 'react';

class Product extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="thumbnail">
                <img src="https://cdn2.from.ae/media/catalog/product/cache/image/9df78eab33525d08d6e5fb8d27136e95/0/1/01_175_78.jpg" />
                <div className="caption">
                <h3>Iphone 11 Pro</h3>
                <p>
                    14.000.000
                </p>
                <p>
                    <a className="btn btn-primary">Mua hang</a>
                </p>
                </div>
            </div>
        </div>
        
      </div>
    );
  }
}

export default Product;
