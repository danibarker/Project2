import React, { useState } from "react";
import "../css/App.css";
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row} from "reactstrap";
import { UncontrolledAlert } from 'reactstrap';
import { updateUser, userLogout } from "../requests/posts";


export default function UserProfile({setCurrentPage}) {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [updateFail, setUpdateFail] = useState(false)
  const [logoutFail, setLogoutFail] = useState('')


  // is the user logged in?
  if (!window.sessionStorage.getItem('token')) {
    return (
      <div style={{ width: "40%", margin: "auto" }}>
      <UncontrolledAlert color="danger">
        You must be logged in to change your User Profile
      </UncontrolledAlert>
      </div>
    );
  }

  const changeUsername = (username) => {
    setUsername( username );
  }
  const changeEmail = (email) => {
    setEmail( email );
  }
  const changePassword = (password) => {
    setPassword( password );
  }

  const changeUser = async () => {
    // debugger;
    try {
      let response = updateUser(username, email, password)
      setCurrentPage('Navigation')
    } catch (error) {
      let errMsg = JSON.parse(error.message).message
      setUpdateFail(errMsg)
    }
  }

  const logoutUser = async () => {
    try {
      userLogout(sessionStorage.getItem('token'))
      window.sessionStorage.removeItem('token')
      setCurrentPage('Navigation')
    } catch (error) {
      let errMsg = JSON.parse(error.message)
      setLogoutFail(errMsg)
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
                            placeholder="Enter new email"
                          />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <Input
                            type="password"
                            onChange={(e)=>{changePassword(e.target.value)}}
                            placeholder="Enter new password"
                          />
                          <br /><br />
                        </InputGroup>
                        {updateFail ? <div style={{ color: "red", fontSize: "1.5em", fontStyle: "italic" }}>{updateFail}<br /><br /></div> : <div></div>}
                        
                        <Button onClick={changeUser} color="success" block>
                          Update account
                        </Button>
                        <Button onClick={() => {setCurrentPage('Admin');}} color="success" block>
                          Admin
                        </Button>
                        <Button onClick={logoutUser} color="success" block>
                          Logout
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
  