import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, subtractFromCart } from '../redux/ActionCreators';
import AddRemove from './AddRemoveComponent';
import Header from './HeaderComponent';

const mapStateToProps = state => {
    return {
        numItems: state.numItems
    }
}

const mapDispatchToProps = { addToCart, subtractFromCart };

function ProductInfo(props) {

    if (props.product) {
        let product = props.product;
        return (
            <div>
                <Header/>
                <div className="container mt-5 pb-5">
                    <div className="media row">
                        <img src={process.env.PUBLIC_URL + '/assets/img/' + product.image}
                            alt={product.name} className="border mx-auto mb-3 mr-md-3 p-3 bg-white" width="400"/>
                        <div className="media-body p-5 mx-auto product-info text-warning">
                            <h3 className="pb-4">{product.name}</h3>
                            <p className="my-0" style={{color: product.availability === "Out of Stock" ? "red" : "green"}}>
                                {product.availability}</p>
                            <p><b>Description:</b> {product.description}</p>
                            <p className="pt-3"><b>Price: </b>{`$${product.price.toFixed(2)}`}</p>
                            <div>
                                <p className="mb-1"><strong>Quantity</strong></p>
                                <AddRemove product={product} quantity={product.quantity} /> {/* Why do we have to pass quantity to child component to see updated state? */}
                                <p>Cart ({props.numItems})</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
    return (<div></div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);