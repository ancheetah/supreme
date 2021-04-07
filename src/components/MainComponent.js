import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Store from './StoreComponent';
import ProductInfo from './ProductInfoComponent';
import Cart from './CartComponent';

const mapStateToProps = state => {
    return {
        accessories: state.accessories,
        apparel: state.apparel
    };
};

class Main extends Component {
    
    render () {
        const ProductWithSKU = ({match}) => {
            console.log("prod w sku: ", this.props.accessories.find(product => 
                product.sku === +match.params.productSku));
            return (
                <ProductInfo 
                    product={this.props.accessories.find(product => 
                        product.sku === +match.params.productSku)}
                />
            );
        };

        return (
                <Switch>
                    <Route exact path='/store' render={() => 
                        <Store products={this.props.accessories}/>} /> 
                    <Route path='/store/:productSku' component={ProductWithSKU} />
                    <Route path='/cart' component={Cart} />
                    <Redirect to='/store' />
                </Switch>
        );
    }

}

export default withRouter(connect(mapStateToProps)(Main));