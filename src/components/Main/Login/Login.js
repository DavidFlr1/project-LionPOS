import React, {useState} from 'react'
import logo from '../../../imgs/logo/LionPOS_Logo_Gray.jpg'
import { Container, Row, Col, Button, Input, Form, FormGroup, Card, CardImg, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'

import '../Login/styles.css'

const Login = () => {
    const [hiddenBranch, setHiddenBranch] = useState(true)
    const [goTo, setGoTo] = useState('/Accounts')

    return (
        <div className="main-container-log">
            <Container className="themed-container" fluid="sm">
                <Row>
                    <Col sm="12" md={{size: 4, offset: 4}}>
                    <Card className="card-container">
                        <CardImg src={logo} alt="Logo" width="100%" className="img-container"/>
                        <CardTitle tag="h3" className="title-primary" className="div-primary">WELCOME</CardTitle>
                        <Form className="form-container">
                            <FormGroup>
                                <Input type="email" name="email" id="userEmail" placeholder="Username" className="input-primary b"/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="userPassword" placeholder="Password" className="input-primary b"/>
                            </FormGroup>
                            <FormGroup hidden={!hiddenBranch}>
                            <hr/>
                                <Input type="select" name="select" id="userSelect" placeholder="Select branch" className="input-primary">
                                    <option>Select branch</option>
                                    <option>Monterrey</option>
                                </Input>
                            <hr/>
                            </FormGroup>
                            <a className="log-a" href="#forget-password">¿Forgot your password?, Lets get it back...</a>
                            <div className="div-primary">
                                <Link to={goTo}>
                                    <Button color="secondary" size="lg" block className="button-effect-primary">Login</Button>
                                </Link>
                            </div>
                        </Form>
                        <div className="div-primary">
                            <a className="log-a" href="#join-lion-pos">Wanna join LionPOS?, Let's find how</a>
                            <br/>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
