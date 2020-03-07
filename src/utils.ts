import React, { useContext } from "react";
import { Tab } from "./types";

export interface Settings {
    closeTabs: boolean;
    includePinnned: boolean;
    width: number;
    height: number;
    ignoreNewtabs: boolean;
    unsuspendTabs: boolean;
}

let context: React.Context<Settings>;

export function CreateSettingsContext(defaultValue: Settings) {
    const settingsContext = React.createContext(defaultValue);
    context = settingsContext;
    return settingsContext;
}

export function useSettingsContext() {
    return useContext(context);
}

export function TabFromChrome(tab: chrome.tabs.Tab) {
    return {
        title: tab.title,
        url: tab.pendingUrl ?? tab.url, // pendingUrl?: string;
        favIconUrl: tab.favIconUrl,
        index: tab.index, // This shouldn't be nullable but I am lazy AF rn
        pinned: tab.pinned,
        incognito: tab.incognito,
    } as Tab;
}