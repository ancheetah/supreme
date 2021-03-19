import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sortByPrice, sortByRating } from '../redux/ActionCreators';

const mapDispatchToProps = {
  sortByPrice: (arr, direction) => (sortByPrice(arr, direction)),
  sortByRating: (arr, direction) => (sortByRating(arr, direction))
}

class SortMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
      this.setState({
          isDropdownOpen: !this.state.isDropdownOpen
      });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.isDropdownOpen} toggle={this.toggleDropdown} size="sm" className="d-flex justify-content-start">
        <DropdownToggle caret>Sort By</DropdownToggle>
        <DropdownMenu>

          <DropdownItem header>Price</DropdownItem>
          
          <DropdownItem 
            onClick={this.props.sortByPrice(this.props.products, "ascending")}>
              Budget Friendly to Ballin'
          </DropdownItem>
          <DropdownItem 
            onClick={this.props.sortByPrice(this.props.products, "descending")}>
              Ballin' to Budget Friendly
          </DropdownItem>

          <DropdownItem divider />
          <DropdownItem header>Rating</DropdownItem>

          <DropdownItem 
            onClick={this.props.sortByRating(this.props.products, "ascending")}>
              Most Outrageous to Essentials
          </DropdownItem>
          <DropdownItem 
            onClick={this.props.sortByRating(this.props.products, "descending")}>
              Essentials to Most Outrageous
          </DropdownItem>

        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(SortMenu));