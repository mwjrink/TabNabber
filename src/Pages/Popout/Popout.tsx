import React, { useEffect, useState } from 'react';
import Drawer from '../../Style/Components/Drawer';
import GroupCard from '../../Style/Components/GroupCard';
import TopBar from '../../Style/Components/TopBar';
import { TabGroup } from '../../types';
import { useSettingsContext } from '../../utils';
import { OverlayDiv, PopoutContainer, PopoutPage } from './Styled';
import FAButton from '../../Style/Components/FAButton';
import CreateGroupPage from '../../Style/Components/CreateGroupPage';
import AddIcon from '../../Style/Components/AddIcon';

export function Popout() {
    // const [windows, setWindows] = useState<chrome.windows.Window[]>();
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);
    const [tabGroups, setTabGroups] = useState<TabGroup[]>([]);

    const settings = useSettingsContext();

    // chrome.storage.sync.set({key: value}, function() {
    //   console.log('Value is set to ' + value);
    // });

    // add a UUID key or something?
    chrome?.storage?.sync.get(['TabNabberGroups'], function(result) {
        console.log('Value currently is ' + result.key);
    });

    useEffect(() => {
        const value = localStorage.getItem('TabNabber_TabGroups');
        if (Boolean(value)) {
            setTabGroups(JSON.parse(value!));
        }
        // else {
        //     setTabGroups(JSON.parse(parseable));
        //     console.log('parseable');
        // }
    }, [setTabGroups]);

    // const createExamples = (() => {
    //     setTabGroups([
    //         {
    //             name: 'Group 1',
    //             created: new Date(),
    //             incognito: false,
    //             tabs: [
    //                 {
    //                     title: 'tab 1',
    //                     url: 'string', // pendingUrl?: string,
    //                     favIconUrl: 'string',
    //                     // index: number, ???
    //                     pinned: true,
    //                     incognito: false,
    //                 },
    //                 {
    //                     title: 'tab 2',
    //                     url: 'string', // pendingUrl?: string,
    //                     favIconUrl: 'string',
    //                     // index: number, ???
    //                     pinned: false,
    //                     incognito: false,
    //                 },
    //                 {
    //                     title: 'tab 3',
    //                     url: 'string', // pendingUrl?: string,
    //                     favIconUrl: 'string',
    //                     // index: number, ???
    //                     pinned: false,
    //                     incognito: false,
    //                 },
    //                 {
    //                     title: 'tab 4',
    //                     url: 'string', // pendingUrl?: string,
    //                     favIconUrl: 'string',
    //                     // index: number, ???
    //                     pinned: false,
    //                     incognito: false,
    //                 },
    //                 {
    //                     title: 'tab 5',
    //                     url: 'string', // pendingUrl?: string,
    //                     favIconUrl: 'string',
    //                     // index: number, ???
    //                     pinned: false,
    //                     incognito: true,
    //                 },
    //             ],
    //         },
    //         {
    //             name: 'Group 2',
    //             created: new Date(),
    //             incognito: false,
    //             tabs: [
    //                 {
    //                     title: 'tab 1',
    //                     url: 'string', // pendingUrl?: string,
    //                     favIconUrl: 'string',
    //                     // index: number, ???
    //                     pinned: false,
    //                     incognito: false,
    //                 },
    //             ],
    //         },
    //         {
    //             name: 'Group 3',
    //             created: new Date(),
    //             incognito: false,
    //             tabs: [
    //                 {
    //                     title: 'tab 1',
    //                     url: 'string', // pendingUrl?: string,
    //                     favIconUrl: 'string',
    //                     // index: number, ???
    //                     pinned: false,
    //                     incognito: false,
    //                 },
    //             ],
    //         },
    //         {
    //             name: 'Group 4',
    //             created: new Date(),
    //             incognito: false,
    //             tabs: [
    //                 {
    //                     title: 'tab 1',
    //                     url: 'string', // pendingUrl?: string,
    //                     favIconUrl: 'string',
    //                     // index: number, ???
    //                     pinned: false,
    //                     incognito: false,
    //                 },
    //             ],
    //         },
    //         {
    //             name: 'Group 5',
    //             created: new Date(),
    //             incognito: false,
    //             tabs: [
    //                 {
    //                     title: 'tab 1',
    //                     url: 'string', // pendingUrl?: string,
    //                     favIconUrl: 'string',
    //                     // index: number, ???
    //                     pinned: false,
    //                     incognito: false,
    //                 },
    //             ],
    //         },
    //         {
    //             name: 'Group 6',
    //             created: new Date(),
    //             incognito: false,
    //             tabs: [
    //                 {
    //                     title: 'tab 1',
    //                     url: 'string', // pendingUrl?: string,
    //                     favIconUrl: 'string',
    //                     // index: number, ???
    //                     pinned: false,
    //                     incognito: false,
    //                 },
    //             ],
    //         },
    //         {
    //             name: 'Group 7',
    //             created: new Date(),
    //             incognito: false,
    //             tabs: [
    //                 {
    //                     title: 'tab 1',
    //                     url: 'string', // pendingUrl?: string,
    //                     favIconUrl: 'string',
    //                     // index: number, ???
    //                     pinned: false,
    //                     incognito: false,
    //                 },
    //             ],
    //         },
    //         {
    //             name: 'Group 8',
    //             created: new Date(),
    //             incognito: false,
    //             tabs: [
    //                 {
    //                     title: 'tab 1',
    //                     url: 'string', // pendingUrl?: string,
    //                     favIconUrl: 'string',
    //                     // index: number, ???
    //                     pinned: false,

    //                     incognito: false,
    //                 },
    //             ],
    //         },
    //         {
    //             name: 'Group 9',
    //             created: new Date(),
    //             incognito: false,
    //             tabs: [
    //                 {
    //                     title: 'tab 1',
    //                     url: 'string', // pendingUrl?: string,
    //                     favIconUrl: 'string',
    //                     // index: number, ???
    //                     pinned: false,
    //                     incognito: false,
    //                 },
    //             ],
    //         },
    //     ]);
    // }, [setTabGroups]);

    // chrome.tabs.getAllInWindow(windowId, function callback);
    // let windows: chrome.windows.Window[];

    // Window {
    //     /**
    //      * The type of browser window this is.
    //      * One of: "normal", "popup", "panel", "app", or "devtools"
    //      */
    //      type: string;
    // }

    // chrome?.windows?.getAll({ populate: true }, (windows: chrome.windows.Window[]) => setWindows(windows));

    // nab selected tabs, Tab { selected: boolean }
    // keep incog groups as incog, Window or Tab { incognito: boolean }

    // chrome.tabs.remove(integer or array of integer tabIds, function callback)

    // LINK TO MANAGER
    // let link = '';
    // chrome?.management?.getSelf((result: chrome.management.ExtensionInfo) => {
    //     link = result.homepageUrl ?? '';
    //     link += '/Manager.html';
    // });

    // if (!windows) return <>Loading</>;

    const [creatingGroup, setCreatingGroup] = useState(false);

    useEffect(() => {
        localStorage.setItem('TabNabber_TabGroups', JSON.stringify(tabGroups));
    }, [tabGroups]);

    return (
        <PopoutContainer width={settings.width} height={settings.height}>
            <TopBar navDrawerOpen={navDrawerOpen} setNavDrawerOpen={setNavDrawerOpen} />
            <PopoutPage flexDirection="column" justifyContent="flex-start">
                {tabGroups.map((element, index) => (
                    <GroupCard key={index} group={element} index={index} />
                ))}
            </PopoutPage>
            <OverlayDiv onClick={() => setNavDrawerOpen(false)} show={navDrawerOpen} />
            <Drawer open={navDrawerOpen} />
            {/* // TODO: @Max, make this popup a screen for choosing the name and tabs for a new group (with close tabs option) */}
            <FAButton onClick={() => setCreatingGroup(true)}>
                <AddIcon />
            </FAButton>
            <CreateGroupPage show={creatingGroup} setCreatingGroup={setCreatingGroup} />
        </PopoutContainer>
    );
}
