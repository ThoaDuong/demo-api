import * as types from './../constants/ActionType';
import getApi from './../utils/apiCaller';

export const actFetchProductRequest = () => {
    return (dispatch) => {
        return getApi('products', 'GET', null).then(res => {
            dispatch(actPetchProduct(res.data))
        });
    }
}
export const actPetchProduct = (products) => {
    return{
        type: types.FETCH_PRODUCT,
        products
    }
}
export const actAddProduct = (product) => {
    return{
        type: types.ADD_PRODUCT,
        product
    }
}
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return getApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data))
        })
    }
}
export const actDeleteProduct = (product) => {
    return{
        type: types.DELETE_PRODUCT,
        product
    }
}
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return getApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(res.data))
        })
    }
}
export const actEditProduct = (product) => {
    return{
        type: types.EDIT_PRODUCT,
        product
    }
}
export const actEditProductRequest = (id, product) => {
    return (dispatch) => {
        return getApi(`products/${id}`, 'PUT', product).then(res => {
            dispatch(actEditProduct(res.data))
        })
    }
}