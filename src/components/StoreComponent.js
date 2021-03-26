import React, { Component } from 'react';
// import NumberFormat from 'react-number-format';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CardBody from 'reactstrap/lib/CardBody';
import Button from 'reactstrap/lib/Button';
import SortMenu from "./SortMenuComponent";


function RenderStoreItem({product}) {
    return (
        <Card className="h-100">
            <Link to={`/store/${product.sku}`}>
                <CardImg className="img-fluid p-3 mx-auto"
                        src={ process.env.PUBLIC_URL + '/assets/img/' + product.image } alt={product.name} />
                <Button className="btn btn-danger btn-sm">View</Button>
            </Link>
            <CardTitle className="text-body">{product.name}</CardTitle>
            <CardBody className="text-body">$ {product.price.toFixed(2)}</CardBody>
        </Card>
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
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            {/* <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem> */}
                            <BreadcrumbItem active>Store</BreadcrumbItem>
                        </Breadcrumb>
                        <h2 className="supreme-logo p-2 d-inline-flex">Supreme</h2>
                        <hr />
                    </div>
                </div>
                <SortMenu products={this.props.products}/>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {store}
                </div>
            </div>
        );
    }

}

export default Store;