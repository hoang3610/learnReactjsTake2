import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../utils/apiCaller';

class ProductItem extends Component {
    onDelete = (id) => {
        if(confirm("ban co chac chan muon xoa khong? " )){ //eslint-disable-line
            this.props.onDelete(id)
        }
    }
    render() {
        var {product, index} = this.props;
        var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>
                    <span class={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`product/${product.id}/edit`} class="btn btn-danger mr-10">sửa</Link>
                    <button type="button" class="btn btn-success" onClick={() => {this.onDelete(product.id)}}>xóa</button>
                </td>
            </tr>
        )
    }
}

export default ProductItem;
