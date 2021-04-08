import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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

  sortAsc(field) {
    let sortedProducts = this.props.products.sort((a,b) => (a[field] > b[field]) ? 1 : -1);
    this.props.setProducts(this.props.products.sort((a,b) => (a[field] > b[field]) ? 1 : -1));
    console.log("In sortAsc", sortedProducts);
  }
  
  sortDesc(field) {
    this.props.setProducts(this.props.products.sort((a,b) => (a[field] < b[field]) ? 1 : -1));
    console.log("In sortDesc");
  }

  render() {
    return (
      <Dropdown isOpen={this.state.isDropdownOpen} toggle={this.toggleDropdown} 
        size="md" className="mb-3 d-flex justify-content-start">
        <DropdownToggle caret color="secondary">Sort By </DropdownToggle>
        <DropdownMenu>

          <DropdownItem header>Price</DropdownItem>
          
          <DropdownItem 
            onClick={() => this.sortAsc("price")}>
              Budget Friendly to Ballin'
          </DropdownItem>
          <DropdownItem 
            onClick={() => this.sortDesc("price")}>
              Ballin' to Budget Friendly
          </DropdownItem>

          <DropdownItem divider />
          <DropdownItem header>Rating</DropdownItem>

          <DropdownItem 
            onClick={() => this.sortAsc("rating")}>
              Most Outrageous to Essentials
          </DropdownItem>
          <DropdownItem 
            onClick={() => this.sortDesc("rating")}>
              Essentials to Most Outrageous
          </DropdownItem>

        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default SortMenu;