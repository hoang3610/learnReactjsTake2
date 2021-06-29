import React, {Component} from 'react';

class Product extends Component {
  constructor(props){
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }
  addToCart(){
    alert(this.props.price)
  }
  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img src={this.props.image}/>
            <div className="caption">
              <h3>{ this.props.name}</h3>
              <p>{this.props.price}</p>
              <p>
                <button type="button" class="btn btn-default" onClick={ this.addToCart}>
                  Mua ngay
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
