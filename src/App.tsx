import React from 'react';
import { StaticRouter as Router, Switch, Route } from 'react-router';
import { Popup } from './Pages/Popup';
import { Manager } from './Pages/Manager';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Popup} />
                <Route path="/Manager" component={Manager} />
            </Switch>
        </Router>
    );
}

export default App;
