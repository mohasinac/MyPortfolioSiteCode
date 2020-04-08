import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../../pages/home/home';
import Resume from '../../pages/resume/resume';
import Contact from '../../pages/contact/contact';
import Projects from '../../pages/projects/projects';
import { Container } from '@material-ui/core'

import './main.scss'
class Main extends Component {
    state = {}
    render() {
        return (
            <Container maxWidth="sm" >
                <Switch>
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/home" component={Home} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </Container>

        );
    }
}

export default Main;