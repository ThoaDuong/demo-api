import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
    render() {
        return (
            <div className="container">
                <Link to="/product/add" className="btn btn-outline-warning mt-3"><i className="fas fa-plus"></i> Thêm sản phẩm</Link>
                <div className="card mt-3">
                    <div className="alert alert-primary">
                        Danh sách sản phẩm
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-striped">
                            <thead className="table-warning">
                                <tr>
                                    <th>STT</th>
                                    <th>Mã SP</th>
                                    <th>Tên SP</th>
                                    <th>Mô tả</th>
                                    <th>Giá</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.props.children }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;