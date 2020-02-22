import React from 'react';
import logo from '../logo.svg';

export function Popup() {
    // chrome.storage.sync

    // chrome.storage.sync.set({key: value}, function() {
    //   console.log('Value is set to ' + value);
    // });

    // chrome.storage.sync.get(['key'], function(result) {
    //   console.log('Value currently is ' + result.key);
    // });

    // chrome.tabs.getAllInWindow(windowId, function callback);
    // let windows: chrome.windows.Window[];
    chrome.windows.getAll({ populate: true }, (windows: chrome.windows.Window[]) => {
        console.log(windows);
    });

    // chrome.tabs.remove(integer or array of integer tabIds, function callback)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}
