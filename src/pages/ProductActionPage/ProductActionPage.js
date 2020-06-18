import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getAPI from './../../utils/apiCaller';
import * as actions from './../../actions/index';
import { connect } from 'react-redux';

class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            txtName : '',
            txtDescribe : '',
            numPrice : '',
            ckbStatus : ''
        }
    }
    componentDidMount(){
        var { match } = this.props;
        if(match){
            var id = match.params.id;
            getAPI(`products/${id}`, 'GET', null).then((respond)=>{
                this.setState({
                    id : respond.data.id,
                    txtName : respond.data.name,
                    txtDescribe : respond.data.describe,
                    numPrice : respond.data.price,
                    ckbStatus : respond.data.status
                })
            })
        }
    }
    onHandleChange = (param) => {
        var target = param.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    onHandleSave = (param) => {
        param.preventDefault();
        var { id, txtName, txtDescribe, numPrice, ckbStatus } = this.state;
        let data = {
            name : txtName,
            describe : txtDescribe,
            price : numPrice,
            status : ckbStatus
        }
        var { history } = this.props;
        if(id){
            //edit
            this.props.onEditProductRequest(id, data);
            history.goBack();
        }else{
            //add new
            this.props.onAddProductRequest(data);
            history.push('/products');
        }
    }
    render() {
        var { txtName, txtDescribe, numPrice, ckbStatus } = this.state;
        return (
            <div className="container">
                <h3 className="text-secondary mt-3">* Vui lòng nhập đầy đủ thông tin</h3>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <form onSubmit =  { this.onHandleSave }>
                        <div className="form-group">
                            <label>Tên sản phẩm</label>
                            <input type="text" 
                                className="form-control" 
                                placeholder="Nhập tên sản phẩm.." 
                                name="txtName"
                                value= { txtName }
                                onChange={ this.onHandleChange }
                            />
                        </div>
                        <div className="form-group">
                            <label>Mô tả</label>
                            <textarea type="text"  className="form-control" 
                                placeholder="Nhập mô tả sản phẩm.." rows="4" 
                                name="txtDescribe"
                                value= { txtDescribe }
                                onChange={ this.onHandleChange }
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>Giá sản phẩm</label>
                            <input type="number"
                                className="form-control" 
                                name="numPrice" 
                                value= { numPrice }
                                onChange={ this.onHandleChange }
                            />
                        </div>
                        <div className="form-group">
                            <label>Tình trạng:</label>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" 
                                        type="checkbox" 
                                        name="ckbStatus" 
                                        checked={ckbStatus}
                                        value= { ckbStatus }
                                        onChange={ this.onHandleChange }
                                    />Còn hàng
                        </label>
                            </div>
                        </div>
                        <Link to='/products' className="btn btn-danger mr-2"><i className="fas fa-long-arrow-alt-left"></i> Trở lại</Link>
                        <button type="submit" className="btn btn-success"><i className="fas fa-download"></i> Lưu lại</button>
                    </form>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProductRequest : (product) => {
            dispatch(actions.actAddProductRequest(product));
        },
        onEditProductRequest : (id, product) => {
            dispatch(actions.actEditProductRequest(id, product));
        }
    }
}
export default connect(null, mapDispatchToProps)(ProductActionPage);