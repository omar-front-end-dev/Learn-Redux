import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/addProduct">Add Product</NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}
