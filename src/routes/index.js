import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'

import Header from '../components/Header'

const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    )
}

export default Routes
