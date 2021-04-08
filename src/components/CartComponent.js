import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Header from './HeaderComponent'
import { removeItem } from '../redux/ActionCreators';
import AddRemove from './AddRemoveComponent';

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

    const handleRemove = (id) => props.removeItem(id);
              
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
                        <button className="btn btn-lg text-warning mx-5">CHECKOUT</button>
                        <Link to="/store"><button className="btn btn-lg text-warning mx-5">CONTINUE SHOPPING</button></Link>
                    </div>
                </div>  
            </React.Fragment>
       )

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
