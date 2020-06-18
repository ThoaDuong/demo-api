import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        return (
            <tr>
                <td>{ index + 1 } </td>
                <td>{ product.id } </td>
                <td>{ product.name } </td>
                <td>{ product.describe} </td>
                <td>{ product.price }đ</td>
                <td>
                    <span className= { product.status ? 'badge badge-success' : 'badge badge-secondary' }>
                        { product.status ? 'Còn hàng' : 'Hết hàng' }
                    </span>
                </td>
                <td>
                    <Link to= {`/product/${product.id}/edit`} className="btn btn-outline-info mr-2"><i className="far fa-edit"></i> Sửa</Link>
                    <button onClick = { () => this.onHandleDelete(product.id) } className="btn btn-outline-danger"><i className="far fa-trash-alt"></i> Xóa</button>
                </td>
            </tr>
        );
    }
    onHandleDelete = (id) => {
        if(confirm('Bạn chắc chắn muốn xóa?')){ //eslint-disable-line
            this.props.onDelete(id)
        }
    }
}

export default ProductItem;