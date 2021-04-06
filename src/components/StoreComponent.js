import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SortMenu from "./SortMenuComponent";


function RenderStoreItem({product}) {
    return (
        <div className="h-100 p-3 d-flex flex-column align-items-end">
            <Link to={`/store/${product.sku}`}>
                <img className="img-fluid card-img-top"
                        src={ process.env.PUBLIC_URL + '/assets/img/' + product.image } 
                        width="200" height="200" alt={product.name} />
            </Link>
            <div className="card-body">
                <p className="card-text py-1">$ {product.price.toFixed(2)}</p>
                <p className="card-title"><strong>{product.name}</strong></p>
                <Link to={`/store/${product.sku}`}>
                    <button className="btn btn-danger btn-sm">View</button>
                </Link>
            </div>
        </div>
    );
}

function Store(props) {
    const [products, setProducts] = useState([]);   // initial state for products is props.products from redux store when component loads
                                                    // returns 2 vals => current state and function to update current state
    useEffect(() => {
            setProducts(props.products) // similar to this.setState()
            console.log("props.products")
        }, [props.products])   // fires whenever props.products changes

        const store = products.map(product => {
            return (
                <div key={product.id} className="col my-3">
                    <RenderStoreItem product={product} />
                </div>
            );
        });

        return (
                <React.Fragment>
                    <nav>
                        <ol class="breadcrumb rounded-0 bg-dark">
                            <li class="breadcrumb-item text-white" active>Home</li>
                        </ol>
                    </nav>
                    <h1 className="supreme-logo p-2 my-3 d-inline-flex">Supreme</h1>
                    <hr />
                    <div class="container">
                        <SortMenu products={[...products]} setProducts={(p) => { // Array.sort() does not return a new array so we need spread operator
                            setProducts(p) 
                        }} />
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                            {store}
                        </div>
                    </div>
                </React.Fragment>
        );

}

export default Store;