import React from 'react';
import { connect } from 'react-redux';
import { addToCart, subtractFromCart } from '../redux/ActionCreators';

const mapStateToProps = (state) => { 
    return {
        accessories: state.accessories 
    }
}
const mapDispatchToProps = { 
    addToCart, 
    subtractFromCart 
};

function AddRemove(props) {

    const handleAdd = (id) => props.addToCart(id);
    const handleSubtract = (id) => props.subtractFromCart(id);

    let btnColor = props.product.availability === "In Stock" ? 
        {disabled: false, color: "btn-primary", borderColor: "border-primary"} : 
        {disabled: true, color: "btn-secondary", borderColor: "border-secondary"};

    return (
        <React.Fragment>
            <div class="btn-group" role="group">
                <button onClick={() => handleSubtract(props.product.sku)} type="button"
                    class={"btn " + btnColor.color} disabled={btnColor.disabled}>-</button>
                <span class={"px-3 py-2 border " + btnColor.borderColor}>{props.quantity ? props.quantity : 0}</span>
                <button onClick={() => handleAdd(props.product.sku)} type="button"
                    class={"btn " + btnColor.color} disabled={btnColor.disabled}>+</button>
            </div>
        </React.Fragment>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRemove);