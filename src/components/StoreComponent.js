import React, { Component } from 'react';
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

class Store extends Component {

    render() {

        const store = this.props.products.map(product => {
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
                        <SortMenu products={this.props.products}/>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                            {store}
                        </div>
                    </div>
                </React.Fragment>
        );
    }

}

export default Store;