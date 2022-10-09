import React from 'react';
import { NavLink } from 'react-router-dom'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function Header(props) {
    return (
        <div>
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Furni<span>.</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li><NavLink className="nav-link scrollto active" to={"/"} exact>Home</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to={'/shop'} exact>Shop</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to={'/about'} exact>About us</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to={'/services'} exact>Services</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to={'/blog'} exact>Blog</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to={'/contact'} exact>Contact us</NavLink></li>
                        </ul>
                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li><NavLink className="nav-link" to={'/auth'}><img src="assets/images/user.svg" /></NavLink></li>
                            <li><NavLink className="nav-link" to={'/cart'}><img src="assets/images/cart.svg" /></NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Header;