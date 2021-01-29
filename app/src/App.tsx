import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import { HomePage } from './pages/HomePage'
import { CreatePage } from './pages/CreatePage'
import { EditPage } from './pages/EditPage'

function App() {
    return (
        <Router>
            <Container className="pt-5">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/create" component={CreatePage} />
                    <Route exact path="/edit/:id" component={EditPage} />
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
