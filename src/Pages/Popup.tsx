import React from 'react';
import logo from '../logo.svg';
import { Page, Card } from '../Style/containers';
import { useHistory } from 'react-router';

export function Popup() {
    const history = useHistory();

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
    let link = '';
    chrome.management.getSelf((result: chrome.management.ExtensionInfo) => {
        link = result.homepageUrl ?? '/Manager';
        console.log(result.homepageUrl);
    });

    return (
        <Page>
            <Card style={{ height: '300px', width: '200px' }}>
                Hello World!
                <button onClick={() => chrome.tabs.create({ url: link })}>Manager</button>
            </Card>
        </Page>
    );
}
