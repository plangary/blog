import styled from 'styled-components'
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";


const StyledP = styled.p`
    color: white;
`

export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand className="light" href="#home"><StyledP>Pouya Langary</StyledP></Navbar.Brand>
                <div className="navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Button className="btn-light">
                                    Login
                                </Button>
                            </a>
                        </li>

                    </ul>
                </div>
            </Navbar>

        </>

    );



}