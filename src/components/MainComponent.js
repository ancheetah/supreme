import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Store from './StoreComponent';
import ProductInfo from './ProductInfoComponent';
import { ACCESSORIES } from '../shared/accessories';
import { APPAREL } from '../shared/apparel';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accessories: ACCESSORIES,
            apparel: APPAREL
        };
    }

    render () {

        const ProductWithSKU = ({match}) => {
            console.log(match.params.productSKU);
            return (
                <ProductInfo 
                    product={this.state.accessories.filter(product => product.sku === +match.params.productSku)[0]}
                />
            );
        };

        return (
            <div>
                {/* <Header /> */}
                <Switch>
                    <Route exact path='/store' render={() => 
                        <Store products={this.state.accessories} updateProducts={(products) => 
                        this.setState({accessories: products}, () => console.log('Updated State'))}/>} />
                    <Route path='/store/:productSku' component={ProductWithSKU} />
                    <Redirect to='/store' />
                </Switch>
            </div>
        );
    }

}

export default Main;