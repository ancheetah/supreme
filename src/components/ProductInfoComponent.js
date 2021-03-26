import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './CartComponent';

function RenderProductInfo({product}) {
    return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 m-1 mx-auto">
                        <img src={ process.env.PUBLIC_URL + '/assets/img/' + product.image}
                            alt={product.name} className="img-fluid" />
                    </div>
                    <div className="col-md-6 m-1 mx-auto">
                        <h3 className="pb-4">{product.name}</h3>
                        <p className="my-0" style={{color: product.availability === "Out of Stock" ? "red" : "green"}}>
                            {product.availability}</p>
                        <p><b>Description:</b> {product.description}</p>
                        <p className="pt-3">{`$ ${product.price.toFixed(2)}`}</p>
                        <Cart availability={product.availability}/>
                    </div>
                </div>
            </div>
    );
}

function ProductInfo(props) {

    if (props.product) {
        return (
            <div>
                {/* <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/store">Store</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.product.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div> */}
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item" active><Link to="/store">Store</Link></li>
                        <li class="breadcrumb-item active">{props.product.name}</li>
                    </ol>
                    <h2 className="supreme-logo p-2 d-inline-flex">Supreme</h2>
                    <hr />
                </nav>
                <RenderProductInfo product={props.product} />
            </div>
        );
    }
    
    //else
    return (<div></div>);

}

export default ProductInfo;