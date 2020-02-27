import React, { useContext } from "react";

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
