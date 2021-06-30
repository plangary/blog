import styled from 'styled-components';
import {Button, Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
const StyledContainer = styled(Container)`
  background-color: #343a40 ;
  max-width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`


const StyledText = styled.h2`
  font-family: "Corbel Light";
  font-size: 5rem;
  color: white;
  flex: 0 0 120px;
  animation: fadeIn linear 10s;
  
  
`
const StyledButton = styled(Button)`
  color: white;
  width: 100%;
  background-color: #343a40;
  border-color: white;
  
  &:hover{
    background-color: #343a40;
    border-color: aqua;
  }
`

export const WelcomeScreen = ()=> {

    return (

      <>
          <StyledContainer>
              <Row>
                  <Col className="text-center">
                      <StyledText>Welcome</StyledText>
                      <Link to="/homepage">
                          <StyledButton>HOW I LEARNED REACT</StyledButton>
                      </Link>
                  </Col>
              </Row>
          </StyledContainer>

      </>
    );


}