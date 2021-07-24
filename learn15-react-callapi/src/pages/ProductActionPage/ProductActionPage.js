import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../utils/apiCaller';
import {connect} from 'react-redux'
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions';

class ProductActionPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    componentDidMount() {
        var {match} = this.props
        if(match){
            var id = match.params.id
            this.props.onEditProduct(id) 
        }
    }

    UNSAFE_componentWillReceiveProps(next_props){
        if(next_props && next_props.itemEditing){
            var {itemEditing} = next_props;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            })
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        var {id, txtName, txtPrice, chkbStatus} = this.state;
        console.log(this.state)
        var {history} = this.props
        var product = {
            id: id,
            name: txtName, 
            price: txtPrice,
            status: chkbStatus
        }
        if(id){
            this.props.onUpdateProduct(product)
            history.goBack();
        }else {
            this.props.onAddProduct(product)
            history.goBack();
        }
    }
    render() {
        var {txtName, txtPrice, chkbStatus} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               <form onSubmit={this.onSave}>
                   <div className="form-group">
                       <label for="">Ten san pham: </label>
                       <input 
                            type="text" 
                            className="form-control" 
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                   </div>
                   <div className="form-group">
                       <label for="">Gia: </label>
                       <input 
                            type="number" 
                            className="form-control" 
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}

                        />
                   </div>
                   <div className="checkbox">
                       <label>
                           <input 
                                type="checkbox" 
                                value="" 
                                name="chkbStatus"    
                                value={chkbStatus}
                                checked={chkbStatus}
                                onChange={this.onChange}
                            />
                           Còn hàng
                       </label>
                   </div>
                   <button type="submit" className="btn btn-primary mr-10">Luu lai</button>
                   <Link to="/product-list" className="btn btn-danger">Quay Lại</Link>
               </form>
               
            </div>
        ) 
    }
    
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    };  
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product))
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
