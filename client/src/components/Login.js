import React, { useState } from "react";
import "../css/App.css";
import {Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row} from "reactstrap";
export default function Login() {
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
                      <div class="row" className="mb-2 pageheading">
                        <div
                          class="col-sm-12 btn btn-primary"
                          style={{ marginLeft: "50px" }}
                        >
                          Login
                        </div>
                      </div>
                      <div
                        className="totheRight"
                        style={{ marginLeft: "50px" }}
                      >
                        <InputGroup className="mb-3">
                          <Input
                            type="text"
                            onChange={this.Email}
                            placeholder="Enter Email"
                          />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <Input
                            type="password"
                            onChange={this.Password}
                            placeholder="Enter Password"
                          />
                        </InputGroup>
                        <Button onClick={this.login} color="success" block>
                          Login
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
