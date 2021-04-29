import React, {useState} from 'react'
import userDefault from '../../../imgs/miscellaneous/userPicture.jpg'
import { Container, Row, Col, Button, Input, UncontrolledPopover, PopoverHeader, PopoverBody, ButtonGroup } from 'reactstrap'
import { Link } from 'react-router-dom';

import '../Accounts/styles.css'

const Accounts = () => {
    const [goTo, setGoTo] = useState('/Dashboard')
    const [active, setActive ] = useState(true)

    return (
        <div className="main-container">
            <Container className="themed-container" fluid={true}>
                <Row className="upbar-container" sm="12">
                    <Col xl="2" sm="3" md="3"className="upbar-col">
                        <Button className="button-primary" size="lg" color="primary">Switch responsive</Button>
                    </Col>
                    <Col xl="2" sm="3" md="3" className="upbar-col">
                        <Button className="button-primary" size="lg" color="primary" id="PopoverCloseAccount">Close account</Button>
                        <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverCloseAccount" style={{textAlign: "center"}}>
                            <PopoverHeader>Close account as</PopoverHeader>
                            <PopoverBody>
                                <Button color="primary" style={{borderRadius: "10px", width: "100%",margin: "2px 0"}}>Current user</Button>
                                <Button color="primary" style={{borderRadius: "10px", width: "100%",margin: "2px 0"}}>Administrator</Button>
                            </PopoverBody>
                        </UncontrolledPopover>
                    </Col>
                    <Col xl="2" sm="2" md="2" className="upbar-col">
                    <Button className="button-primary" size="lg" color="primary" id="PopoverFilter">Filter</Button>
                    <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverFilter">
                        <PopoverHeader >Filtrar usuarios por: </PopoverHeader>
                        <PopoverBody >
                            <ButtonGroup vertical style={{width: "100%"}}>
                                <Button color="primary">Supervisor</Button>
                                <Button color="primary">Asistente</Button>
                                <Button color="primary">Cajero</Button>
                                <Button color="primary">Cocina</Button>
                                <Button color="info">RH</Button>
                                <Button color="info">Contable</Button>
                            </ButtonGroup>
                        </PopoverBody>
                    </UncontrolledPopover>

                    </Col>
                    <Col xl="4" sm="2" md="2"></Col>
                    <Col xl="2" sm="2" md="2" className="upbar-col">
                        <Button className="button-primary" size="lg" color="primary">Exit</Button>
                    </Col>
                </Row>
                <Row className="body-container">
                    <Col sm="4" md="" lg="4" className="dock-container">
                        <Row>
                            <div className="dock-div responsive">
                                <img className="dock-img" src={userDefault}></img>
                                <div className="dock-card">
                                        <h5 className="form-h5">David Ricardo Flores Tena</h5>
                                        <h6 className="form-h6">Administrador <span className="case-right form-span">ID: 36963</span> </h6>
                                        <hr className="my-1"/>
                                        <span className="form-span">Check In: 8:05 <br/> Check Out: 14:35</span>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className="dock-div">
                                <span className="isActive form-span" style={{background: active ? "#5CF97A" : "#F85B5C"}}></span>
                                <img className="dock-img" src={userDefault}></img>
                                <div className="dock-card">
                                        <h5 className="form-h5">Diana Elizabeth Cantu Leyva</h5>
                                        <h6 className="form-h6">Administrador <span className="case-right form-span">ID: 36963</span> </h6>
                                        <hr className="my-1"/>
                                        <span className="form-span">Check In: 8:05 <br/> Check Out: 14:35</span>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className="dock-div-pin">
                                <Input type="password" className="input-pin"/>
                                <div className="dock-div-buttons">
                                    <Button className="button-pin" color="primary">1</Button>
                                    <Button className="button-pin" color="primary">2</Button>
                                    <Button className="button-pin" color="primary">3</Button>
                                    <Button className="button-pin" color="primary">4</Button>
                                    <Button className="button-pin" color="primary">5</Button>
                                    <Button className="button-pin" color="primary">6</Button>
                                    <Button className="button-pin" color="primary">7</Button>
                                    <Button className="button-pin" color="primary">8</Button>
                                    <Button className="button-pin" color="primary">9</Button>
                                    <Button className="button-pin" color="danger">X</Button>
                                    <Button className="button-pin" color="primary">0</Button>
                                    <Link to={goTo}>
                                        <Button className="button-pin" color="success">GO</Button>
                                    </Link>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col sm="8" md="" className="accounts-container">
                        <div className="accounts-div accounts-box-1">
                            <div className="user-div">
                                <span className="isActive" style={{background: active ? "#5CF97A" : "#F85B5C"}}></span>
                                <img className="user-img" src={userDefault}></img>
                                <div className="user-card">
                                    <h5 className="form-h5">David Flores</h5>
                                    <hr className="my-2"/>
                                    <h6 className="form-h6">Admin &nbsp;&nbsp;&nbsp;<span className="form-span">36963</span></h6>
                                </div>
                            </div>

                        </div>
                            <hr className="hr-fix"/>
                        <div className="accounts-div accounts-box-2">
                            <div className="user-div">
                                <span className="isActive" style={{background: active ? "#5CF97A" : "#F85B5C"}}></span>
                                <img className="user-img" src={userDefault}></img>
                                <div className="user-card">
                                    <h5 className="form-h5">Diana Cantu</h5>
                                    <hr className="my-2"/>
                                    <h6 className="form-h6">Manager &nbsp;&nbsp;&nbsp;<span className="form-span">24642</span></h6>
                                </div>
                            </div>
                            
                        </div>
                            <hr className="hr-fix"/>
                        <div className="accounts-div accounts-box-3">
                            <div className="user-div">
                                <span className="isActive" style={{background: active ? "#5CF97A" : "#F85B5C"}}></span>
                                <img className="user-img" src={userDefault}></img>
                                <div className="user-card">
                                    <h5 className="form-h5">Salvador Ramirez</h5>
                                    <hr className="my-2"/>
                                    <h6 className="form-h6">Supervisor &nbsp;&nbsp;&nbsp;<span className="form-span">12321</span></h6>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Accounts
