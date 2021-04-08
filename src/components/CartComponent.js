import React from 'react';
import { connect } from 'react-redux'
import Header from './HeaderComponent'
import { removeItem } from '../redux/ActionCreators';
import AddRemove from './AddRemoveComponent';
import Jumbotron from 'reactstrap/lib/Jumbotron';

const mapStateToProps = (state)=>{
    return{
        accessories: state.accessories,
        items: state.addedItems,
        numItems: state.numItems,    
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
                       
                        <li className="media py-3 border-bottom" key={item.sku}>
                            <img src={process.env.PUBLIC_URL + '/assets/img/' + item.image} alt={item.image} 
                                className="mr-5 p-2" height="150" width="150" />
                        
                            <div className="media-body">
                                <h5 className="mt-0 mb-1">{item.name}</h5>
                                <p>{item.description}</p>
                                <p><b>Price: ${item.price}</b></p> 
                                <p><b>Quantity: {item.quantity}</b></p>
                                <AddRemove product={item} quantity={item.quantity} />
                                <button className="btn btn-outline-primary" onClick={() => {handleRemove(item.sku)}}>
                                    Remove
                                </button>
                            </div>
                            
                        </li>                        
                    )
                })
            ):

             (
                <h3>Your cart is empty</h3>
             )

       return(
            <React.Fragment>
                <Header/>
                <div className="cart container">
                    <div className="jumbotron jumbotron-fluid mb-0">
                        <h2>Shopping Cart</h2>
                    </div>
                    <ul className="list-unstyled border py-4 px-4">
                        {addedItems}
                    </ul>
                </div>  
            </React.Fragment>
       )

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
