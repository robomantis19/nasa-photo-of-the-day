import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Astroid Central
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Home</DropdownItem>
          <DropdownItem>Zoom In</DropdownItem>
          <DropdownItem disabled>Zoom Out</DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#DataContainer">All Astroids</DropdownItem>
          <DropdownItem>Near Earth Objects</DropdownItem>
          <DropdownItem>JPL Links</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

