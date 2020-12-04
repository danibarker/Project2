import React, { useState } from "react";
import "../css/App.css";
import {Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row} from "reactstrap";
export default function Login({setCurrentPage}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  

  const changeUsername = (event) => {
    setUsername( event.target.value );
  }
  const changePassword = (event) => {
    setPassword( event.target.value );
  }
  const login = ()=> {
    // debugger;
    fetch("http://localhost:3000/api/login/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((Response) => Response.json())
      .then((result) => {
        console.log(result);
        if (result.Status == "Invalid") alert("Invalid User");
        else this.props.history.push("/Dashboard");
      });
  }

 
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <CardGroup>
                <Card className="p-2">
                  <CardBody>
                    <Form>
                      
                      <div
                        className="totheRight"
                        style={{  }}
                      >
                        <InputGroup className="mb-3">
                          <Input
                            type="text"
                            onChange={(e)=>{changeUsername(e.target.value)}}
                            placeholder="Enter Email"
                          />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <Input
                            type="password"
                            onChange={(e)=>{changePassword(e.target.value)}}
                            placeholder="Enter Password"
                          />
                        </InputGroup>
                        <Button onClick={login} color="success" block>
                          Login
                        </Button>
                      </div>
                    </Form>
                    <br />
                    <button onClick={()=>{setCurrentPage('SignUp')}}>Create an Account</button>
                    
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
