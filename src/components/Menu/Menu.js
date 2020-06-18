import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        label : 'Trang chủ',
        to : '/',
        exact : true
    },
    {
        label : 'Quản lý sản phẩm',
        to : '/products',
        exact : false
    }
]
const CustomLink = ( { label, to, activeOnlyWhenExact } ) => {
    return (
        <Route path = { to } exact = { activeOnlyWhenExact } children = { ( {match} ) => {
            var active = match ? 'active' : '';
            return(
                <li className={`nav-item ${active}`}>
                    <Link className="nav-link" to = { to }>
                        { label }
                    </Link>
                </li>
            );
        } }
        />
    );
}
class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                <Link className="navbar-brand" to = "/">
                    <img width="40px" src="https://bridge267.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-03.jpg"
                        alt="Brand" />
                </Link>
                <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="my-nav" className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        { this.showMenu(menus) }
                    </ul>
                </div>
            </nav>
        );
    }
    showMenu = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((item, index) => {
                return (
                    <CustomLink 
                        key = { index }
                        label = { item.label } 
                        to = { item.to }
                        activeOnlyWhenExact = { item.exact }
                    />
                ); 
            })
        }
        return result
    }
}

export default Menu;