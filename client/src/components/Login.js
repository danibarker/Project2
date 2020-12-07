import React, { useState } from "react";
import "../css/App.css";
import {Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row} from "reactstrap";
import { userLogin } from "../requests/posts";
export default function Login({setCurrentPage}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginFail, setLoginFail]= useState(false)
  const changeUsername = (username) => {
    setUsername(username);
  }
  const changePassword = (password) => {
    setPassword(password);
  }
  const login = async ()=> {
      // debugger;
      try {
          let response = await userLogin(username, password)
          if (response.token) {
              localStorage.setItem("token",response.token)
          }
          setCurrentPage('Navigation')
      } catch (error) {
          setLoginFail(error.message)
      }
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
                                                /><br /><br />
                                                {loginFail ? <span style={{ color: "red" }}>{loginFail}</span> : <span></span>}
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
