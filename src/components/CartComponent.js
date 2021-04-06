import React, { Component } from 'react';

//dispatch from here; product id and quantity

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        };
        this.incrementItem = this.incrementItem.bind(this);
        this.decrementItem = this.decrementItem.bind(this);
    }
    
    incrementItem = (availability) => {
        if (availability === "In Stock") {
            return this.setState({ clicks: this.state.clicks + 1});
        }
    }

    decrementItem = () => {
        if (this.state.clicks > 0) { 
            return this.setState({ clicks: this.state.clicks - 1 });
        }
    }

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        return (
            <div>
                <p><strong>Quantity</strong></p>
                <div class="btn-group" role="group">
                    <button onClick={() => this.incrementItem(this.props.availability)} type="button" class="btn btn-danger">+</button>
                    <span class="px-3 py-2 border border-danger">{this.state.clicks}</span>
                    <button onClick={this.decrementItem} type="button" class="btn btn-danger">-</button>
                </div>
                <p>Cart ({this.state.clicks})</p>
            </div>
        );
    }
}

export default Cart;