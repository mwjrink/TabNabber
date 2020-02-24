export interface Tab {
    title: string;
    url: string; // pendingUrl?: string;
    favIconUrl: string;
    // index: number; ???
    pinned: boolean;

    // incognito: boolean; ???
}

export interface TabGroup {
    name: string;
    created: Date;
    tabs: Tab[];
    // incognito: boolean; ???
}

export interface GroupFolder {
    name: string;
    created: Date;
    group: TabGroup[];
}