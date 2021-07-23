import React, {Component} from 'react';

class ProductDetail extends Component{
  render(){
    var {match} = this.props
    var name = match.params.slug;
    return (
      <div>Product Detail: {name} </div>
    )
  }
}

export default ProductDetail;
