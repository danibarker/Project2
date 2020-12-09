import React, { useState } from "react";
import "../css/App.css";
import {Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row} from "reactstrap";
import { addUser } from "../requests/posts";

export default function SignUp({setCurrentPage}) {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registerFail, setRegisterFail]= useState(false)

  const changeUsername = (username) => {
    setUsername( username );
  }
  const changeEmail = (email) => {
    setEmail( email );
  }
  const changePassword = (password) => {
    setPassword( password );
  }

  const register = async () => {
    
    // debugger;
    try {
      let response = await addUser(username, email, password)
      //setCurrentPage('Navigation')
    } catch (error) {
      let errMsg = JSON.parse(error.message).message
      setRegisterFail(errMsg)
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
                            placeholder="Enter username"
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <Input
                            type="text"
                            onChange={(e)=>{changeEmail(e.target.value)}}
                            placeholder="Enter email"
                          />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <Input
                            type="password"
                            onChange={(e)=>{changePassword(e.target.value)}}
                            placeholder="Enter password"
                          />
                          <br /><br />
                        </InputGroup>
                        {registerFail ? <div style={{ color: "red", fontSize: "1.5em", fontStyle: "italic" }}>{registerFail}<br /><br /></div> : <div></div>}
                        
                        <Button onClick={register} color="success" block>
                          Create account
                        </Button>
                      </div>
                    </Form>
                    <br />
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  