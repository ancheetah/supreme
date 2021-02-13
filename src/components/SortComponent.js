/*
1. Create a sort button that when clicked displays a dropdown menu
    Sort By:
        Price: Ballin' -> Budget Friendly
        Price: Budget Friendly -> Ballin'
        Product: Most Outgrageous -> Absolutely Essential
        Product: Absolutely Essential -> Most Outgrageous

2. Sort the accessories array
3. Pass the sorted array as a prop into the Store component when it is called in Main
*/

import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//import { ACCESSORIES } from '../shared/accessories';

class Sort extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDropdownOpen: false,
      //accessories: ACCESSORIES
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.priceLowToHigh = this.priceLowToHigh.bind(this);
  }

  toggleDropdown() {
      this.setState({
          isDropdownOpen: !this.state.isDropdownOpen
      });
  }

  priceLowToHigh() {
    const sortedArr = this.props.products.sort((a,b) => (a.price > b.price) ? 1 : -1);
    //this.setState({accessories: sortedArr});
    console.log("sortedArr: ", sortedArr);
    this.props.updateProducts(sortedArr);
  }

  render() {
    return (
      <Dropdown isOpen={this.state.isDropdownOpen} toggle={this.toggleDropdown} size="sm" className="d-flex justify-content-start">
        <DropdownToggle caret>
          Sort By
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Price</DropdownItem>
          <DropdownItem onClick={this.priceLowToHigh}>Budget Friendly to Ballin'</DropdownItem>
          <DropdownItem onClick="">Ballin' to Budget Friendly</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Product</DropdownItem>
          <DropdownItem onClick="">Most Outrageous to Essentials</DropdownItem>
          <DropdownItem onClick="">Essentials to Most Outrageous</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Sort;