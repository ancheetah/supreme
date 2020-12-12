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

import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SortMenu = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm" className="d-flex justify-content-start">
      <DropdownToggle caret>
        Sort By
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Price</DropdownItem>
        <DropdownItem onClick="">Budget Friendly to Ballin'</DropdownItem>
        <DropdownItem onClick="">Ballin' to Budget Friendly</DropdownItem>
        <DropdownItem divider />
        <DropdownItem header>Product</DropdownItem>
        <DropdownItem onClick="">Most Outrageous to Essentials</DropdownItem>
        <DropdownItem onClick="">Essentials to Most Outrageous</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SortMenu;