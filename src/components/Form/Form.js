import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-secondary mt-3">* Vui lòng nhập đầy đủ thông tin</h3>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <form action="">
                        <div className="form-group">
                            <label>Tên sản phẩm</label>
                            <input type="email" className="form-control" placeholder="Nhập tên sản phẩm.." name="name" />
                        </div>
                        <div className="form-group">
                            <label>Mô tả</label>
                            <textarea className="form-control" placeholder="Nhập mô tả sản phẩm.." rows="4" name="descripe"></textarea>
                        </div>
                        <div className="form-group">
                            <label>Giá sản phẩm</label>
                            <input type="number" step='100' className="form-control" name="price" />
                        </div>
                        <div className="form-group">
                            <label>Tình trạng:</label>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" name="status" />Còn hàng
                        </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger mr-2"><i className="fas fa-long-arrow-alt-left"></i> Trở lại</button>
                        <button type="submit" className="btn btn-success"><i className="fas fa-download"></i> Lưu lại</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;