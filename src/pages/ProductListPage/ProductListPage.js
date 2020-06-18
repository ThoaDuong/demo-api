import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import apiCaller from './../../utils/apiCaller';
import * as actions from './../../actions/index';


class ProductListPage extends Component {
    componentDidMount(){
        this.props.onFetchProductRequest();
    }
    findIndex = (products, id) => {
        var index = -1;
        if(products.length > 0){
            for(var i=0; i<products.length; i++){
                if(products[i].id === id){
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    render() {
        var { products } = this.props;
        return (
            <ProductList>
                { this.showProducts(products) }
            </ProductList>
        );
    }
    onDelete = (id) => {
        var { products } = this.props;
        var index = this.findIndex(products, id);
        apiCaller(`products/${id}`, 'DELETE', null).then((res)=>{
            if(res.status === 200){ //OK
                if(index !== -1){
                    products.splice(index, 1);
                    this.setState({
                        products : products
                    })
                }
            }
        })
    }
    showProducts = (products) => {
        var result = null;
        if(products.length > 0){
            result = products.map((product, index) => {
                return (    
                    <ProductItem
                        key = { index }
                        product = { product }
                        index = { index }
                    />
                );
            })
        }
        return result;
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        onFetchProductRequest : () => {
            dispatch(actions.actFetchProductRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);