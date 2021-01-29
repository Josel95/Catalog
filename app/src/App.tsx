import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { CreatePage } from './pages/CreatePage'
import { EditPage } from './pages/EditPage'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/create" component={CreatePage} />
                <Route exact path="/edit/:id" component={EditPage} />
            </Switch>
        </Router>
    );
}

export default App;
