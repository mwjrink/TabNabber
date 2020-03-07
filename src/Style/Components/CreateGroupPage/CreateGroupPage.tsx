import React, { useEffect, useState, useRef, MutableRefObject } from 'react';
import { Tab, TabGroup } from '../../../types';
import { useSettingsContext } from '../../../utils';
import FAButton from '../FAButton';
import { FAButtonIcon } from '../FAButton/FAButton.Styled';
import WindowCard from '../WindowCard';
import { StyledCreateGroupPage } from './CreateGroupPage.Styled';

interface CreateGroupPageProps {
    show: boolean;
    tabRetriever: MutableRefObject<() => Tab[]>;
}

function CreateGroupPage({ show, tabRetriever }: CreateGroupPageProps) {
    const settings = useSettingsContext();
    const [windows, setWindows] = useState<chrome.windows.Window[]>([]);
    const retrievers = useRef<(() => Tab[])[]>([]);

    useEffect(() => {
        setWindows([]);
        chrome?.windows?.getAll({ populate: true }, (windows: chrome.windows.Window[]) => setWindows(windows));

        if (!show) {
            retrievers.current = [];
        }
    }, [show]);

    const setTabRetriever = (value: () => Tab[]) => {
        retrievers.current = [...retrievers.current, value];
    };

    tabRetriever.current = () => retrievers.current.flatMap((retriever) => retriever());

    return (
        // pseudo element for animating
        // when animation ends, swap the real element in
        <StyledCreateGroupPage hidden={!show} screenWidth={settings.width} screenHeight={settings.height}>
            {/* style={index !== 0 ? { marginTop: theme.spacing.gutter } */}
            {show &&
                windows.map((window) => (
                    <WindowCard
                        key={String(window.id) + new Date().getTime()}
                        window={window}
                        setTabRetriever={setTabRetriever}
                    />
                ))}
        </StyledCreateGroupPage>
    );
}

export default CreateGroupPage;
