import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router';
import { Popup } from './Pages/Popup';
import { Manager } from './Pages/Manager';

function App() {
  // chrome.contextMenus.create(object createProperties, function callback)

  //chrome.management.getSelf(function callback)
    return (
        <Router initialEntries={['/', '/Manager']} initialIndex={0}>
            <Switch>
                <Route exact path='/' component={Popup} />
                <Route path='/Manager' component={Manager} />
            </Switch>
        </Router>
    );
}

export default App;
