export interface Tab {
    title: string;
    url: string; // pendingUrl?: string;
    favIconUrl: string;
    index?: number; // This shouldn't be nullable but I am lazy AF rn
    pinned: boolean;

    // this would allow a group to contain incog and non incog together
    // not sure if that is desired???
    // make it a setting to allow or deny this
    incognito: boolean;
}

export interface TabGroup {
    name: string;
    created: Date;
    tabs: Tab[];
    incognito: boolean;
}

export interface GroupFolder {
    name: string;
    created: Date;
    group: TabGroup[];
}