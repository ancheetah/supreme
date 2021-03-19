import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Store from './StoreComponent';
import ProductInfo from './ProductInfoComponent';
// import { ACCESSORIES } from '../shared/accessories';
// import { APPAREL } from '../shared/apparel';

const mapStateToProps = state => {
    return {
        accessories: state.accessories,
        apparel: state.apparel
    };
};

class Main extends Component {

    render () {

        const ProductWithSKU = ({match}) => {
            console.log(match.params.productSKU);
            return (
                <ProductInfo 
                    product={this.props.accessories.filter(product => product.sku === +match.params.productSku)[0]}
                />
            );
        };

        return (
            <div>
                {/* <Header /> */}
                <Switch>
                    <Route exact path='/store' render={() => 
                        <Store products={this.props.accessories} updateProducts={(products) =>
                                this.setState({accessories: products}, () => console.log('Updated State'))}/>} /> 
                    <Route path='/store/:productSku' component={ProductWithSKU} />
                    <Redirect to='/store' />
                </Switch>
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps)(Main));