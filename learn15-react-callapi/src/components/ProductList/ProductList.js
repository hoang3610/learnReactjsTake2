import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {
    render() {
        return (
            <div class="panel panel-primary">
                                  <div class="panel-heading">
                                        <h3 class="panel-title">Danh sách sản phẩm</h3>
                                  </div>
                                  <div class="panel-body">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>MA SAN PHAM</th>
                                                    <th>TEN</th>
                                                    <th>GIA</th>
                                                    <th>STATUS</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.children}
                                            </tbody>
                                        </table>
                                        
                                  </div>
                            </div>
        ) 
    }
}

export default ProductList;
