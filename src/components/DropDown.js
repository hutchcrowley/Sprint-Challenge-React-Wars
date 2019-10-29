import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropDown = () =>
{

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='wrapper-main'>
            <Navbar color='black' light expand='md'>
                <NavbarBrand href='https://swapi.co'>
                    React Wars!
      </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <NavItem className='d-flex align-items-center'>
                        <NavLink className='font-weight-bold' href='https://swapi.co/about'>
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
              </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
</DropdownItem>
                            <DropdownItem>
                                Option2
</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </Navbar>
        </div>


    )
}

export default DropDown;