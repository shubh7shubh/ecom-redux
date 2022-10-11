import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import '../App.css'

const Navbaar = () => {
      return (
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/"><img src="logo.jpg" alt="logo" width = '100' height='30' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto mx-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="products">Products</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets">Login</Nav.Link>
                    <Nav.Link href="#deets"><AiOutlineShoppingCart/></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
         
export default Navbaar
