import {Button, Col, Form, FormControl, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import styled from 'styled-components'
import {NavBar} from "./components/NavBar";
import {WelcomeScreen} from "./components/WelcomeScreen";



export const App= ()=> {
  return (
      <>
          <NavBar/>
          <WelcomeScreen/>


      </>

  );
}

export default App;
