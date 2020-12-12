import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1});
    }

    DecrementItem = () => {
        if (this.state.clicks > 0) { 
            return this.setState({ clicks: this.state.clicks - 1 });
        }
    }

    render() {
        return (
            <div>
                <p>Quantity</p>
                <div class="btn-group" role="group">
                    <button onClick={this.IncrementItem} type="button" class="btn btn-danger">+</button>
                    <span class="px-3 py-2 border border-danger">{this.state.clicks}</span>
                    <button onClick={this.DecrementItem} type="button" class="btn btn-danger">-</button>
                </div>
                <p><strong>Cart ({this.state.clicks})</strong></p>
            </div>
        );
    }
}

export default Cart;