import React from 'react';
// import NumberFormat from 'react-number-format';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CardBody from 'reactstrap/lib/CardBody';
import Button from 'reactstrap/lib/Button';
import SortMenu from "./SortComponent";


function RenderStoreItem({product}) {
    return (
        <Card className="h-100">
            <Link to={`/store/${product.sku}`}>
                <CardImg className="img-img-fluid p-3 d-block w-100 mx-auto" height="" src={product.image} alt={product.name} />
                <Button className="btn btn-danger btn-sm">View</Button>
                <CardTitle className="text-body">{product.name}</CardTitle>
                <CardBody className="text-body">$ {product.price.toFixed(2)}</CardBody>
                {/* <CardBody><NumberFormat value={product.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></CardBody> */}
                
            </Link>
        </Card>
    );
}

function Store(props) {

    const store = props.products.map(product => {
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
            <SortMenu />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {store}
            </div>
        </div>
    );

}

export default Store;