import React from 'react';
import Header from './HeaderComponent';

function Brands(props) {

    const brandList = props.brands.map(brand => {
        return (
            <div key={brand.id} className="col my-3">
                <div class="card m-3">
                    <img src={process.env.PUBLIC_URL + '/assets/img/brands/' + brand.image}   
                        className="card-img-top" alt={brand.image} width="200" height="auto"/>   
                    <div className="card-body">
                        <h4 class="card-title">{brand.name}</h4>
                    </div>          
                </div>
            </div>
        );
    });

    return (
        <div className="pb-5">
            <Header />
            <div className="container p-5 brands-wrapper">
                <h1 className="text-warning p-3">BRANDS</h1>
                <div className="row p-3">
                    {brandList}
                </div>
            </div>
        </div>
    );
}

export default Brands;