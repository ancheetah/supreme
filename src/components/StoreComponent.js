import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SortMenu from "./SortMenuComponent";
import HeaderComponent from './HeaderComponent';

function RenderStoreItem({product}) {
    return (
        <div className="card h-100">
            <Link to={`/store/${product.sku}`}>
                <img className="img-fluid card-img-top border border-warning border-bottom-0 p-2 bg-white"
                        src={ process.env.PUBLIC_URL + '/assets/img/' + product.image } 
                        width="200" height="auto" alt={product.name} />
            </Link>
            <div className="card-body border border-warning text-warning store-card">
                <p className="card-title"><strong>{product.name}</strong></p>
                <p className="card-subtitle">$ {product.price.toFixed(2)}</p>
                <Link to={`/store/${product.sku}`}>
                    <button className="btn btn-warning btn-sm mt-3"><strong>View</strong></button>
                </Link>
            </div>
        </div>
    );
}

function Store(props) {
    const [products, setProducts] = useState([]);   // initial state for products is props.products from redux store when component loads
    console.log(props);                                                // returns 2 vals => current state and function to update current state
    useEffect(() => {
            setProducts(props.products) // similar to this.setState()
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
                <HeaderComponent/>
                <div className="container pb-5">
                    <h1 className="supreme-logo p-2 my-3 d-inline-flex">Supreme</h1>
                    <hr />
                    <div class="store-wrapper p-5">
                        <SortMenu products={[...products]} setProducts={(p) => { // Array.sort() does not return a new array so we need spread operator
                            setProducts(p)
                        }} />
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                            {store}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

}

export default Store;