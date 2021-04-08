import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, 
        Form, FormGroup, Input, Label } from 'reactstrap';
import Header from './HeaderComponent';
import { removeItem } from '../redux/ActionCreators';
import AddRemove from './AddRemoveComponent';
import FormText from 'reactstrap/lib/FormText';

const mapStateToProps = (state)=>{
    return{
        accessories: state.accessories,
        items: state.addedItems,   
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = {
        removeItem
}

function Cart(props) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [name, setName] = useState('');
    const [cardNum, setCardNum] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [remember, setRemember] = useState(false);

    const handleRemove = (id) => props.removeItem(id);
    const handleCheckout = (event) => {    //this would normally have backend code
        alert(`Name: ${name.value} Expires: ${date.value} Remember: ${remember.checked}`);
        toggle(); //close modal
        event.preventDefault();
    }
              
        let addedItems = props.items.length ?
            (  
                props.items.map(id => {
                    let item = props.accessories.find( obj => obj.sku === id );

                    return(
                       
                        <li className="media bg-white mb-2" key={item.sku}>
                            <img src={process.env.PUBLIC_URL + '/assets/img/' + item.image} alt={item.image} 
                                className="mr-5 p-2 align-self-center" height="150" width="150" />
                        
                            <div className="media-body text-left ml-md-5">
                                <div class="row">
                                    <div class="col">
                                        <h4 className="mt-0 mb-1">{item.name}</h4>
                                        <p className="text-secondary">Quantity: {item.quantity}</p>
                                    </div>
                                    <div class="col">                                    
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p style={{'font-size':"1.2rem"}}>Subtotal: ${item.price * item.quantity}</p>
                                    </div>
                                    <div className="col">
                                        <AddRemove product={item} quantity={item.quantity} />
                                        <button className="btn text-primary" onClick={() => {handleRemove(item.sku)}}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                        </li>                        
                    )
                })
            ):

             (
                <h3 className="text-white">Your cart is empty</h3>
             )

       return(
            <React.Fragment>
                <Header/>

                <div className="shoppingCart container pb-5">

                    <div className="jumbotron jumbotron-fluid mb-0">
                        <h2>SHOPPING CART</h2>
                    </div>

                    <ul className="list-unstyled border border-warning py-4 px-4">
                        {addedItems}
                    </ul>

                    <div className="py-3 bg-warning" id="checkout">
                        <h3 className="text-black font-weight-bold py-3">Grand Total: ${props.totalPrice}</h3>
                        <button className="btn btn-lg text-warning mx-5" onClick={() => toggle()}>CHECKOUT</button>
                        <Link to="/store"><button className="btn btn-lg text-warning mx-5">CONTINUE SHOPPING</button></Link>
                    </div>

                </div>  

                {/* Payment Form */}
                <Modal isOpen={modal} toggle={toggle}> {/* isOpen and toggle are built-in attributes of <Modal> in reactstrap */}
                    <ModalHeader toggle={toggle}>CHECKOUT</ModalHeader> {/* adding toggle here allows user to close modal when it is open */}
                    <ModalBody>
                    <Form onSubmit={handleCheckout}>
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name"
                                    innerRef={input => setName(input)} />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="cardNum">Credit Card Number</Label>
                                <Input type="password" id="cardNum" name="cardNum"
                                    innerRef={input => setCardNum(input)} />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="date">Expiration</Label>
                                <Input type="date" id="date" name="date" innerRef={input => setDate(input)}/>
                            </FormGroup>

                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label htmlFor="cvv">CVC/CVV</Label>
                                        <Input type="text" id="cvv" name="cvv"
                                            innerRef={input => setCVV(input)} />
                                        <FormText>3 or 4 digit code</FormText>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label htmlFor="zipcode">Zipcode</Label>
                                        <Input type="text" id="zipcode" name="zipcode"
                                            innerRef={input => setZipcode(input)} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => setRemember(input)} />
                                    Save my card for future use
                                </Label>
                            </FormGroup>
                            
                            <Button type="submit" value="submit" color="warning" className="my-3">Pay Now</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
       )

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
