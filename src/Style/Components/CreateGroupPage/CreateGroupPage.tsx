import React, { MutableRefObject, useEffect, useRef, useState, useMemo } from 'react';
import { Tab, TabGroup } from '../../../types';
import { useSettingsContext } from '../../../utils';
import TagsInputBar from '../TagsInputBar';
import WindowCard from '../WindowCard';
import { BottomBar, NameInput, StyledCreateGroupPage } from './CreateGroupPage.Styled';
import { Divider } from '../../Layout.Styled';

interface CreateGroupPageProps {
    show: boolean;
    tabGroup: MutableRefObject<TabGroup | undefined>;
}

function CreateGroupPage({ show, tabGroup }: CreateGroupPageProps) {
    const settings = useSettingsContext();
    const [windows, setWindows] = useState<chrome.windows.Window[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [tabs, setTabs] = useState<Record<number, Tab[]>>([]);
    const nameInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        chrome?.windows?.getAll({ populate: true }, (windows: chrome.windows.Window[]) => setWindows(windows));
        return () => setWindows([]);
    }, [show]);

    const setTabsCallback = useMemo(
        () => (index: number, value: Tab[]) => {
            setTabs((current) => {
                const copy = { ...current };
                copy[index] = value;
                return copy;
            });
        },
        [setTabs]
    );

    useEffect(() => {
        if (tabs !== {}) {
            tabGroup.current = {
                name: nameInputRef.current?.value ?? new Date().toLocaleString(),
                created: new Date(),
                incognito: false, // TODO: @Max, filler
                tags,
                tabs: Object.values(tabs).flat(),
            };
        }
        // eslint-disable-next-line
    }, [nameInputRef, tags.length, tabs]);

    return (
        // pseudo element for animating
        // when animation ends, swap the real element in
        <StyledCreateGroupPage hidden={!show} screenWidth={settings.width} screenHeight={settings.height}>
            {/* style={index !== 0 ? { marginTop: theme.spacing.gutter } */}
            {show &&
                windows.map((window, index) => (
                    <WindowCard
                        key={String(window.id) + new Date().getTime()}
                        window={window}
                        setTabsCallback={(value: Tab[]) => setTabsCallback(index, value)}
                    />
                ))}
            <BottomBar>
                <NameInput
                    ref={nameInputRef}
                    placeholder="Enter a name..."
                />
                <Divider shown />
                <TagsInputBar tags={tags} setTags={setTags} />
            </BottomBar>
        </StyledCreateGroupPage>
    );
}

export default CreateGroupPage;
