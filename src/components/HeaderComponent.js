import React, { Component }  from 'react';
import { Collapse } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {    //this would normally have backend code
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal(); //close modal
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid my-0 py-3">
                    <Link to="/store"><img src={process.env.PUBLIC_URL + "/assets/img/OD-logo.jpeg"} alt="On Deck Logo" 
                        className="fluid" height="150"/></Link>
                </div>

                <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-md mb-5">
                    <a className="navbar-brand" href="/">
                    <Link to="/store"><img src={process.env.PUBLIC_URL + "/assets/img/OD-sublogo.png"} 
                        alt="On Deck Sublogo" height="40" width="40"/></Link>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuItems" onClick={this.toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Collapse navbar id="menuItems" isOpen={this.state.isNavOpen}>
                        <ul class="navbar-nav text-light">
                            <li className="nav-item mx-3"><NavLink className="nav-link" to="/store">Shop</NavLink></li>
                            <li className="nav-item mx-3"><NavLink className="nav-link" to="/brands">Brands</NavLink></li>
                            <li className="nav-item mx-3"><NavLink className="nav-link" to="/cart">
                                <i className="fa fa-shopping-cart pr-2"></i>Cart</NavLink>
                            </li>
                        </ul>
                    </Collapse>
                </nav>

            </React.Fragment>
        );
    }
}

export default Header;