import React, { Component } from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Carts from './../Components/Carts'
import CartItem from './../Components/CartItem'
import CartResult from './../Components/CartResult'
import * as Message from './../constansts/Message'
import {actRemoveProductInCart, actChangeMessage, actUpdateProductInCart} from "./../actions/index";


class CartContainer extends Component {
    render() {
        var {carts} = this.props
        return (
            <Carts>
                {this.showCartItem(carts)}
                {this.showTotalAmount(carts)}
            </Carts>
        )
    }
    showCartItem = (carts) => {
        var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props
        var result = <tr>
                        <td> {Message.MSG_CART_EMPTY} </td>
                    </tr>;
        if(carts.length > 0){
            result = carts.map((item,index) => {
                return <CartItem 
                            key={index} 
                            item={item}
                            index={index}
                            onDeleteProductInCart={onDeleteProductInCart}
                            onChangeMessage={onChangeMessage}
                            onUpdateProductInCart={onUpdateProductInCart}
                            />
            })
        }
        return result;
    }
    showTotalAmount = (carts) => {
        var result = null;
        if(carts.length > 0) {
            result = <CartResult carts={carts}/>
        }
        return result;
    }
}

CartContainer.propTypes = {
    carts: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
  };

const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
}

const dispatchStateToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(actRemoveProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(CartContainer);
