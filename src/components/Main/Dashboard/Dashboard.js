import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Collapse, Button} from 'reactstrap'
import { Link } from 'react-router-dom';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

import ImportExportIcon from '@material-ui/icons/ImportExport';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';

import '../Dashboard/styles.css'

const routes = [{
        path: "/",
        section: "",
        icon: "",
        sections: [{
            accessKey: "",
            name: "",
            letter: "",
            }
        ]
    }
]

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [collapsedAwait, setCollapsedAwait ] = useState(true)

    const [isOpenManagement, setIsOpenManagement] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen);    

    const toggleNavbar = async () => {
        setCollapsed(!collapsed)
        if(collapsed === true) {
            setTimeout(() => {
                setCollapsedAwait(!collapsedAwait)
            }, 200);
        } else {
            setCollapsedAwait(!collapsedAwait)
        }
    }
    
    if(collapsed === true && collapsedAwait === false) {
        setCollapsedAwait(true)
    }


    return (
        <div className="dashboard-main-container">
            <div className="navbar-container" style={{ width: collapsed ? "70px" : "250px"}} onMouseEnter={toggleNavbar} onMouseLeave={toggleNavbar}>
            <Container>
                <Col>
                    <Row>
                        <Link to="/Dashboard" className="navbar-profile">
                        <Button className="navbar-profile">
                            <span hidden={collapsedAwait}>David Flores</span>
                            <AccountCircleOutlinedIcon className="icons-style icon-style-secondary"/>
                        </Button>
                        </Link>
                    </Row>

                    <Row>
                        <Button className={collapsed ? "navbar-item navbar-item-inactive" : "navbar-item navbar-item-active"} onClick={toggle}>
                            <StorefrontOutlinedIcon className="icons-style"/>
                            <span hidden={collapsedAwait}>Management</span>
                        </Button>
                        <Collapse isOpen={isOpen}>
                            <Link to='/Users'>
                            <Button className={collapsed ? "navbar-subitem navbar-subitem-inactive" : "navbar-subitem navbar-subitem-active"} onClick>
                                <span hidden={!collapsed} className="subitem-span">U </span><span hidden={collapsedAwait}>Users</span>
                            </Button>
                            </Link>
                            <Link to='/Restaurant'>
                            <Button className={collapsed ? "navbar-subitem navbar-subitem-inactive" : "navbar-subitem navbar-subitem-active"} onClick>
                                <span hidden={!collapsed} className="subitem-span">R </span><span hidden={collapsedAwait}>Restaurant</span>
                            </Button>
                            </Link>
                        </Collapse>
                    </Row>
                    
                    <hr/>

                    <Row className="navbar-footer">
                        <Link to='/Accounts' className="navbar-link">
                        <Button className={collapsed ? "navbar-item navbar-item-inactive" : "navbar-item navbar-item-active"}>
                            <ImportExportIcon className="icons-style icons-size" />
                            <span hidden={collapsedAwait}>Switch account</span>
                        </Button>
                        </Link>

                        <Button className={collapsed ? "navbar-item navbar-item-inactive" : "navbar-item navbar-item-active"}>
                            <NotificationsNoneIcon className="icons-style icons-size" />
                            <span hidden={collapsedAwait}>Notifications</span>
                        </Button>


                        <Button className={collapsed ? "navbar-item navbar-item-inactive" : "navbar-item navbar-item-active"}>
                            <SettingsIcon className="icons-style icons-size" />
                            <span hidden={collapsedAwait}>Settings</span>
                        </Button>
                        
                    </Row>
                </Col>
            </Container>
            </div>
            <div className="menubar">
                
            </div>
        </div>
    )
}

export default Dashboard

