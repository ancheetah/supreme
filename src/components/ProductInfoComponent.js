import React from 'react';
import { Link } from 'react-router-dom';
// import Cart from './CartComponent';
import { connect } from 'react-redux';
import { addToCart } from '../redux/ActionCreators';

const mapDispatchToProps = { addToCart };

function RenderProductInfo({product, handleClick}) {

    // const handleClick = (id) => this.props.addToCart(id);
    // console.log("render product: ", product);

    return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 m-1 mx-auto">
                        <img src={process.env.PUBLIC_URL + '/assets/img/' + product.image}
                            alt={product.name} className="img-fluid" />
                    </div>
                    <div className="col-md-6 m-1 mx-auto">
                        <h3 className="pb-4">{product.name}</h3>
                        <p className="my-0" style={{color: product.availability === "Out of Stock" ? "red" : "green"}}>
                            {product.availability}</p>
                        <p><b>Description:</b> {product.description}</p>
                        {/* <p className="pt-3">{`$ ${product.price.toFixed(2)}`}</p> */}
                        {/* <Cart productSku={product.sku} availability={product.availability}/> */}

                        <div>
                            <p><strong>Quantity</strong></p>
                            <div class="btn-group" role="group">
                                {/* <button onClick={() => this.incrementItem(this.props.availability)} type="button" class="btn btn-danger">+</button> */}
                                <button onClick={() => handleClick(product.sku)} type="button" class="btn btn-danger">-</button>
                                <span class="px-3 py-2 border border-danger">0</span>
                                <button onClick={() => handleClick(product.sku)} type="button" class="btn btn-danger">+</button>
                            </div>
                            <p>Cart (0)</p>
                        </div>

                    </div>
                </div>
            </div>
    );
}

function ProductInfo(props) {
    if (props.product) {
        const handleClick = (id) => props.addToCart(id);
        console.log("product info", props.product);
        return (
            <div>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item" active><Link to="/store">Home</Link></li>
                        <li class="breadcrumb-item active">{props.product.name}</li>
                    </ol>
                    <h1 className="supreme-logo p-2 my-3 d-inline-flex">Supreme</h1>
                    <hr />
                </nav>
                <RenderProductInfo product={props.product} handleClick={handleClick} />
            </div>
        );
    }  
    return (<div></div>);
}

export default connect(null, mapDispatchToProps)(ProductInfo);