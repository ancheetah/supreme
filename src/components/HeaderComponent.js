import React, { Component }  from 'react';
import { Button, Modal, ModalHeader, ModalBody, 
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
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
                <div className="jumbotron jumbotron-fluid mb-0">
                    <img src="/assets/img/OD-logo.png" href="#" alt="On Deck Logo" className="fluid"/>
                </div>

                <nav className="navbar navbar-dark bg-dark sticky-top">
                    <a className="navbar-brand" href="/">
                        <img src="/assets/img/OD-sublogo.png" alt="On Deck Sublogo"/>
                    </a>
                    <span className="navbar-text ml-auto">  {/* styles the button to match navbar and align right */}
                        <button className="btn btn-outline-light" onClick={this.toggleModal}> {/* toggles modal on click */}
                            <i className="fa fa-home fa-lg" /> Cart
                        </button>
                    </span>
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