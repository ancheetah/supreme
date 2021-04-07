import React, { Component }  from 'react';
import { Button, Modal, ModalHeader, ModalBody, 
    Collapse,
    Form, FormGroup, Input, Label } from 'reactstrap';
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
                <div className="jumbotron jumbotron-fluid my-0 py-0">
                    <Link to="/store"><img src={process.env.PUBLIC_URL + "/assets/img/OD-logo.png"} alt="On Deck Logo" 
                        className="fluid" height="300"/></Link>
                </div>

                <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-md mb-5">
                    <a className="navbar-brand" href="/">
                    <Link to="/store"><img src={process.env.PUBLIC_URL + "/assets/img/OD-sublogo.png"} 
                        alt="On Deck Sublogo" height="60" width="60"/></Link>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuItems" onClick={this.toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Collapse navbar id="menuItems" isOpen={this.state.isNavOpen}>
                        <ul class="navbar-nav text-light mx-3">
                            <li className="nav-item mx-2"><NavLink className="nav-link" to="/store">Shop</NavLink></li>
                            <li className="nav-item mx-2"><NavLink className="nav-link" to="/brands">Brands</NavLink></li>
                            <li className="nav-item mx-2"><NavLink className="nav-link" to="/cart">
                                <i className="fa fa-shopping-cart pr-2"></i>Cart</NavLink>
                            </li>
                        </ul>
                        {/* <span className="navbar-text ml-auto">
                            <button className="btn btn-outline-light" onClick={this.toggleModal}>
                                <i className="fa fa-home"></i>Cart
                            </button>
                        </span> */}
                    </Collapse>
                </nav>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> {/* isOpen and toggle are built-in attributes of <Modal> in reactstrap */}
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader> {/* adding toggle here allows user to close modal when it is open */}
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;