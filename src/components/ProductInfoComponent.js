import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import {Button} from 'reactstrap/lib/Button';
import { Link } from 'react-router-dom';

function RenderProductInfo({product}) {
    return (
            <div className="row">
                <div className="col-md-4 m-1">
                    <img src={product.image} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-md-6 m-1">
                    <h3>{product.name}</h3>
                    <p>{`Availability: ${product.availability}`}</p>
                    <p>{`Description: ${product.description}`}</p>
                    <p>{`$ ${product.price}`}</p>
                    <p>Quantity: </p>
                    <button class="btn btn-danger">Add to Cart</button>
                </div>
            </div>
    );
}

function ProductInfo(props) {

    if (props.product) {
        return (
            <div class="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/store">Store</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.product.name}</BreadcrumbItem>
                        </Breadcrumb>
                        {/* <h2>{props.product.name}</h2> */}
                        {/* <hr /> */}
                    </div>
                </div>
                <RenderProductInfo product={props.product} />
            </div>
        );
    }
    
    //else
    return (<div></div>);

}

export default ProductInfo;