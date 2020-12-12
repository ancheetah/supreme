import React from 'react';
import NumberFormat from 'react-number-format';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CardBody from 'reactstrap/lib/CardBody';
import Button from 'reactstrap/lib/Button';

function RenderStoreItem({product}) {
    return (
        <Card>
            <Link to={`/store/${product.sku}`}>
                <CardImg width="100%" src={product.image} alt={product.name} />
                <CardTitle>{product.name}</CardTitle>
                <CardBody><NumberFormat value={product.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></CardBody>
                <Button className="btn-danger text-white">View</Button>
            </Link>
        </Card>
    );
}

function Store(props) {

    const store = props.products.map(product => {
        return (
            <div key={product.id} className="col m-1">
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
                    <h2>Store</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {store}
            </div>
        </div>
    );
    
}

export default Store;