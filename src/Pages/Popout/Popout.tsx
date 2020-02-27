import React, { useEffect, useState } from 'react';
import Drawer from '../../Style/Components/Drawer';
import GroupCard from '../../Style/Components/GroupCard';
import TopBar from '../../Style/Components/TopBar';
import { TabGroup } from '../../types';
import { useSettingsContext } from '../../utils';
import { OverlayDiv, PopoutContainer, PopoutPage } from './Styled';
import AddFAButton from '../../Style/Components/AddFAButton';

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

    const createGroupsFromAllOpenTabs = () => {
        const windowsCallback = (windows: chrome.windows.Window[]) => {
            const groups: TabGroup[] = windows
                // .filter((w) => w.type === 'normal')
                .map((window) => ({
                    name: String(window.id),
                    created: new Date(),
                    incognito: window.incognito,
                    tabs: window
                        .tabs!.filter((t: any) => !t.url.startsWith('chrome://'))
                        .map((tab: any) => {
                            // settings use pending urls
                            let url = tab.pendingUrl ?? tab.url;
                            let favIconUrl = tab.favIconUrl;

                            if (
                                settings.unsuspendTabs &&
                                url?.startsWith('chrome-extension://') &&
                                url?.includes('/suspended.html#ttl=')
                            ) {
                                const index = url.indexOf('&uri=');
                                const value = url.substr(index + '&uri='.length);
                                // this parsing should be done elsewhere and I should
                                // not be modifying params here but this is here for now
                                url = value;
                                favIconUrl = 'http://www.google.com/s2/favicons?domain=' + url;
                            }

                            if (!Boolean(favIconUrl)) {
                                favIconUrl = 'http://www.google.com/s2/favicons?domain=' + url;
                            }

                            return {
                                title: tab.title!,
                                url: url!,
                                favIconUrl: favIconUrl!,
                                index: tab.index,
                                pinned: tab.pinned,
                                incognito: tab.incognito,
                            };
                        }),
                }));

            setTabGroups((current) => [...groups, ...current]);
        };

        chrome?.windows?.getAll({ populate: true }, windowsCallback);
    };

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
            <AddFAButton onClick={createGroupsFromAllOpenTabs} />
        </PopoutContainer>
    );
}
