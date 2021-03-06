import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Sort extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.priceLowToHigh = this.priceLowToHigh.bind(this);
    this.priceHighToLow = this.priceHighToLow.bind(this);
    this.ratingLowToHigh = this.ratingLowToHigh.bind(this);
    this.ratingHighToLow = this.ratingHighToLow.bind(this);
  }

  toggleDropdown() {
      this.setState({
          isDropdownOpen: !this.state.isDropdownOpen
      });
  }

  priceLowToHigh() {
    const sortedArr = this.props.products.sort((a,b) => (a.price > b.price) ? 1 : -1);
    // console.log("sortedArr: ", sortedArr);
    this.props.updateProducts(sortedArr);
  }

  priceHighToLow() {
    const sortedArr = this.props.products.sort((a,b) => (a.price < b.price) ? 1 : -1);
    this.props.updateProducts(sortedArr);
  }

  ratingLowToHigh() {
    const sortedArr = this.props.products.sort((a,b) => (a.rating > b.rating) ? 1 : -1);
    //console.log("sortedArr: ", sortedArr);
    this.props.updateProducts(sortedArr);
  }

  ratingHighToLow() {
    const sortedArr = this.props.products.sort((a,b) => (a.rating < b.rating) ? 1 : -1);
    //console.log("sortedArr: ", sortedArr);
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
          <DropdownItem onClick={this.priceHighToLow}>Ballin' to Budget Friendly</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Rating</DropdownItem>
          <DropdownItem onClick={this.ratingLowToHigh}>Most Outrageous to Essentials</DropdownItem>
          <DropdownItem onClick={this.ratingHighToLow}>Essentials to Most Outrageous</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Sort;