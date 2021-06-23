import styled from 'styled-components'
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";


const StyledP = styled.p`
    color: white;
`

const StyledButton = styled(Button)`
  color: white;
  width: 100%;
  background-color: #343a40;
  border-color: white;
  
  &:hover{
    background-color: #343a40;
    border-color: aqua;
    color: white;
  }
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
                                <StyledButton className="btn-light">
                                    Login
                                </StyledButton>
                            </a>
                        </li>

                    </ul>
                </div>
            </Navbar>

        </>

    );



}