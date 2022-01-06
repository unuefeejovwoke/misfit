import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

import { LinkContainer } from 'react-router-bootstrap'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <header>
            <Navbar expand="lg" collapseOnSelect className="text position-fixed-top" >
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand className="ll">Misfit</Navbar.Brand>
                    </LinkContainer>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"> 
                            <LinkContainer to='/cart' className="ll">
                                    <Nav.Link ><i className="fas fa-shopping-cart warning"></i>Cart</Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile' className="ll">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                        
                            ): (
                                <LinkContainer to='/login' className="ll">
                                    <Nav.Link ><i className="fas fa-user"></i>Login</Nav.Link>
                                </LinkContainer>

                                )}

                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu' className="ll">
                                    <LinkContainer to='/admin/userlist' className="ll">
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist' className="ll">
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist' className="ll">
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}
                        
                        </Nav>
                        <SearchBox />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
