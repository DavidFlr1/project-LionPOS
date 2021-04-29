import React, {useState, useEffect} from 'react'
import { Login, Accounts, Dashboard, Users, Restaurant } from './components/index'
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom'

import './styles.css'

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Login/>
                    </Route>
                    <Route exact path="/Accounts">
                        <Accounts />
                    </Route>
                    <Route exact path="/Dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
                
                <Dashboard />
                <Switch>
                    <Route exact path="/Users">
                        <Users />
                    </Route>
                    <Route exact path="/Restaurant">
                            <Restaurant />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
