import React, { Component } from "react";
import Products from "../Components/Products";
import Product from "../Components/Product";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMessage} from "./../actions/index";

class ProductsContainer extends Component {
    render() {
        var {products} = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        )
    }
    showProducts(products){
        var result= null;
        var {onAddToCart, onChangeMessage} = this.props;
        if(products.length > 0){
            result = products.map((product, index) => {
                return <Product 
                            key={index} 
                            product={product}
                            onAddToCart = {onAddToCart}
                            onChangeMessage = {onChangeMessage}
                            />
            })
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    onChangeMessage: PropTypes.func.isRequired 
};

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const dispatchStateToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(ProductsContainer);
