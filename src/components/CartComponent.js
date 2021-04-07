import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './HeaderComponent'

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

function Cart(props) {
              
        let addedItems = props.items.length ?
            (  
                props.items.map(item=>{
                    return(
                       
                        <li className="media" key={item.sku}>
                            <img src={item.img} alt={item.img} className="mr-3"/>
                        
                            <div className="media-body">
                                <h5 className="mt-0 mb-1">{item.name}</h5>
                                <p>{item.description}</p>
                                <p><b>Price: ${item.price}</b></p> 
                                <p><b>Quantity: {item.quantity}</b></p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="fa fa-caret-up"></i></Link>
                                    <Link to="/cart"><i className="fa fa-caret-down"></i></Link>
                                </div>
                                <button className="btn btn-outline-secondary">Remove</button>
                            </div>
                            
                        </li>                        
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )

       return(
            <div>
                <Header/>
                <div className="cart container">
                    <h5>You have ordered:</h5>
                    <ul className="list-unstyled">
                        {addedItems}
                    </ul>
                </div>  
            </div>
       )

}

export default connect(mapStateToProps)(Cart);


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         clicks: 0
    //     };
    //     this.incrementItem = this.incrementItem.bind(this);
    //     this.decrementItem = this.decrementItem.bind(this);
    // }
    
    // incrementItem = (availability) => {
    //     if (availability === "In Stock") {
    //         return this.setState({ clicks: this.state.clicks + 1});
    //     }
    // }

    // decrementItem = () => {
    //     if (this.state.clicks > 0) { 
    //         return this.setState({ clicks: this.state.clicks - 1 });
    //     }
    // }
