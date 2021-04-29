import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Button, Input, Form, FormGroup, Label, FormText } from 'reactstrap'
import { DataGrid } from '@material-ui/data-grid';
import Dashboard from '../../Main/Dashboard/Dashboard'

import '../Users/styles.css'

const Users = () => {
    const managementUserValues = {
        internalId: "",
        active: false,
        name: "",
        surname: "",
        gender: ["Hombre", "Mujer", "Otro"],
        photo: "",
        age: "0",
        birthdate: "01/101/1900",
        placeOfBirth: "",
        nationality: ["Mexicana"],
        maritalStatus: ["Soltero", "Casado", "Union libre", "Separado", "Divorciado", "Viudo"],
        CURP: "",
        NSS: "",
        RFC: "",
        academicDegree: ["Primaria", "Secundaria", "Bachillerato", "Tecnica", "Licenciatura", "Maestria", "Doctorado", "Posgrado", "Especialidad"],
        phone: "",
        cellphone: "",
        email: "",
        emergencyContact: "",
        emergencyPhone: "",
        street: "",
        number: "",
        intNumber: "",
        suburb: "",
        postalCode: "",
        country: "",
        state: "",
        city: "",
        restaurant: "",
        branch: "",
        permissions: "1",
        user: "",
        password: "",
    }

    const managementUserColumns = [
        { field: 'internalId', headerName: 'ID', type: 'number', width: 70, description: '', sortable: true, hide: false },
        { field: 'active', headerName: 'Active', type: 'boolean', width: 100, description: '', sortable: true, hide: false },
        { field: 'name', headerName: 'Name', type: 'string', width: 130, description: '', sortable: true, hide: false },
        { field: 'surname', headerName: 'Surname', type: 'string', width: 130, description: '', sortable: true, hide: false },
        { field: 'gender', headerName: 'Gender', type: 'string', width: 100, description: '', sortable: true, hide: false },
        { field: 'photo', headerName: 'Photo', type: 'string', width: 130, description: '', sortable: false, hide: true },
        { field: 'age', headerName: 'Age', type: 'number', width: 90, description: '', sortable: true, hide: false },
        { field: 'birthdate', headerName: 'Birthdate', type: 'date', width: 120, description: '', sortable: true, hide: false },
        { field: 'placeOfBirth', headerName: 'Place of birth', type: 'string', width: 160, description: 'City and state where user has born', sortable: false, hide: false },
        { field: 'nationality', headerName: 'Nationality', type: 'string', width: 120, description: '', sortable: true, hide: false },
        { field: 'maritalStatus', headerName: 'Marital status', type: 'string', width: 140, description: '', sortable: true, hide: false },
        { field: 'CURP', headerName: 'CURP', type: 'string', width: 190, description: '', sortable: true, hide: false },
        { field: 'NSS', headerName: 'NSS', type: 'string', width: 140, description: '', sortable: true, hide: false },
        { field: 'RFC', headerName: 'RFC', type: 'string', width: 190, description: '', sortable: true, hide: false },
        { field: 'academicDegree', headerName: 'Academic degree', type: 'string', width: 170, description: 'Max level academic degree reached', sortable: true, hide: false },
        { field: 'phone', headerName: 'Phone', type: 'number', width: 130, description: '', sortable: true, hide: false },
        { field: 'cellphone', headerName: 'Cellphone', type: 'number', width: 130, description: '', sortable: true, hide: false },
        { field: 'email', headerName: 'Email', type: 'string', width: 260, description: '', sortable: true, hide: false },
        { field: 'emergencyContact', headerName: 'Emergency contact', type: 'string', width: 180, description: 'Emergency contact name and relationship', sortable: false, hide: false },
        { field: 'emergencyPhone', headerName: 'Emergency phone', type: 'number', width: 170, description: 'Emergency contact phone', sortable: false, hide: false },
        { field: 'street', headerName: 'Street', type: 'string', width: 160, description: '', sortable: true, hide: false },
        { field: 'number', headerName: 'Number', type: 'number', width: 160, description: '', sortable: true, hide: false },
        { field: 'intNumber', headerName: 'Int number', type: 'string', width: 160, description: '', sortable: true, hide: false },
        { field: 'suburb', headerName: 'Suburb', type: 'string', width: 160, description: '', sortable: true, hide: false },
        { field: 'postalCode', headerName: 'Postal code', type: 'number', width: 130, description: '', sortable: true, hide: false },
        { field: 'country', headerName: 'Country', type: 'string', width: 150, description: '', sortable: true, hide: false },
        { field: 'state', headerName: 'State', type: 'string', width: 150, description: '', sortable: true, hide: false },
        { field: 'city', headerName: 'City', type: 'string', width: 150, description: '', sortable: true, hide: false },
        { field: 'restaurant', headerName: 'Restaurant', type: 'string', width: 150, description: '', sortable: true, hide: true },
        { field: 'branch', headerName: 'Branch', type: 'string', width: 150, description: '', sortable: true, hide: false },
        { field: 'permissions', headerName: 'Permissions', type: 'string', width: 130, description: '', sortable: true, hide: false },
        { field: 'user', headerName: 'Username', type: 'string', width: 260, description: '', sortable: true, hide: false },
    ]

    const managementUserRows = [
        {
            id: 1,
            internalId: "2",
            active: false,
            name: "David Ricardo",
            surname: "Flores Tena",
            gender: "Hombre",
            photo: "https://localhost:3000/",
            age: "22",
            birthdate: "21/07/1998",
            placeOfBirth: "Guadalajara, Jal.",
            nationality: "Mexicana",
            maritalStatus: "Soltero",
            CURP: "FOTD980721HJCLNV00",
            NSS: "1234567890",
            RFC: "FOTD980721R38",
            academicDegree: "Licenciatura",
            phone: "81929100",
            cellphone: "8112365417",
            email: "davidricardo.flores33@gmail.com",
            emergencyContact: "Diana",
            emergencyPhone: "8129422784",
            street: "Calle sur",
            number: "3661",
            intNumber: "1",
            suburb: "Burocratas Municipales",
            postalCode: "64769",
            country: "México",
            state: "Nuevo Leon",
            city: "Monterrey",
            restaurant: "Main",
            branch: "Main",
            permissions: "1",
            user: "davidricardo.flores33@gmail.com",
            password: "123456",
        }
    ]

    const [values, setValues] = useState(managementUserValues)

    const handleInputChange = e => {
        const { name, value } = e.target; // Allow acces to the control name and its value
        setValues({...values, [name]: value}) // ...values copy actual value and update the value
    };

    return (
        <div>
            <div className="dashboard-sub-container">
                <Container className="themed-container" fluid={true} className="form-div">
                    <Col xl="12">
                            <Form>
                                <FormGroup row>
                                    <Label xl={2}>User</Label>
                                    <Col xl={2} md={4} sm={6}>
                                        <Input onChange={handleInputChange} name="internalId" value={values.internalId} className="form-lg" type="text" placeholder="ID"/>
                                    </Col>
                                    <Col xl={8} md={4} sm={4}>
                                        <Input type="checkbox"/> {' '}Active
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label xl={2} >Personal information</Label>
                                    <Col xl={3} md={4} sm={4}><Input className="" type="text" placeholder="First name" /></Col>
                                    <Col xl={3} md={4} sm={4}><Input className="" type="text" placeholder="Last name" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="select">
                                        <option disabled selected>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </Input></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="file" />
                                    <FormText color="muted"> User picture (optional)</FormText></Col>

                                    <Label xl={2}></Label>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="number" placeholder="Age" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="date" placeholder="Birthdate" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="text" placeholder="Place of birth" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="select">
                                        <option disabled selected>Nationality</option>
                                        <option>Mexicana</option>
                                    </Input></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="select">
                                        <option disabled selected>Marital status</option>
                                        <option>Soltero</option>
                                        <option>Casado</option>
                                        <option>Union libre</option>
                                        <option>Separado</option>
                                        <option>Divorciado</option>
                                        <option>Viudo</option>
                                    </Input></Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label xl={2}></Label>
                                    <Col xl={3} md={4} sm={4}><Input className="" type="text" placeholder="CURP" /></Col>
                                    <Col xl={3} md={4} sm={4}><Input className="" type="text" placeholder="RFC" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="text" placeholder="NSS" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="select">
                                    <option disabled selected>Academic degree</option>
                                        <option>Primaria</option>
                                        <option>Secundaria</option>
                                        <option>Bachillerato</option>
                                        <option>Tecnica</option>
                                        <option>Licenciatura</option>
                                        <option>Maestria</option>
                                        <option>Doctorado</option>
                                        <option>Posgrado</option>
                                        <option>Especialidad</option>
                                    </Input></Col>
                                </FormGroup>
                                <hr/>
                                <FormGroup row>
                                    <Label xl={2}>Contact information</Label>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="number" placeholder="Phone" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="number" placeholder="Cellphone" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="email" placeholder="Email" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="text" placeholder="Emergency contact" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="text" placeholder="Emergency phone" /></Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label xl={2}></Label>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="text" placeholder="Street" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="number" placeholder="Number" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="number" placeholder="Int number" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="text" placeholder="Suburb" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="text" placeholder="Postal code" /></Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label xl={2}></Label>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="text" placeholder="Country" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="text" placeholder="State" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="text" placeholder="City" /></Col>
                                </FormGroup>
                                <hr/>
                                <FormGroup row>
                                    <Label xl={2}>Account information</Label>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="select">
                                    <option disabled selected>Restaurant</option>
                                        <option>Main</option>
                                    </Input></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="select">
                                    <option disabled selected>Branch</option>
                                        <option>Main</option>
                                    </Input></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="select">
                                    <option disabled selected>Rol</option>
                                        <option>1 - Admin</option>
                                        <option>2 - Manager</option>
                                        <option>3 - Supervisor</option>
                                        <option>4 - Assistant</option>
                                        <option>5 - Cashier</option>
                                        <option>6 - Kitchen</option>
                                        <option>7 - RH</option>
                                        <option>8 - Financial</option>
                                    </Input></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="text" placeholder="Username" /></Col>
                                    <Col xl={2} md={4} sm={4}><Input className="" type="password" placeholder="Password" /></Col>
                                </FormGroup>
                                <hr/>
                                <FormGroup row>
                                    <Label xl={8}></Label>
                                    <Col xl={1} md={2} sm={2}><Button className="form-button-1" color="primary" onClick={() => console.log(values)}>Search</Button></Col>
                                    <Col xl={1} md={2} sm={2}><Button className="form-button-1" color="success">Create</Button></Col>
                                    <Col xl={1} md={2} sm={2}><Button className="form-button-1" color="warning">Edit</Button></Col>
                                    <Col xl={1} md={2} sm={2}><Button className="form-button-1" color="danger">Delete</Button></Col>
                                </FormGroup>
                            </Form>
                            <hr className="hr-fix"/>
                        <Row >
                            <div className="form-table-div">
                                <DataGrid rows={managementUserRows} columns={managementUserColumns} pageSize={5}/>
                            </div>
                        </Row>
                    </Col>
                </Container>
            </div>
        </div>
    )
}

export default Users