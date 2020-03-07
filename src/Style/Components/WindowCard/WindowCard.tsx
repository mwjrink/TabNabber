import React, { useState, useEffect } from 'react';
import { Tab } from '../../../types';
import { Divider } from '../../Layout.Styled';
import TabDisplayRow from '../TabDisplayRow';
import {
    StyledWindowCard,
    StyledTitleBar,
    StyledTabListContainer,
    StyledWindowCardTopAppBar,
} from './WindowCard.Styled';
import { TabFromChrome } from '../../../utils';

interface WindowCardProps {
    window: chrome.windows.Window;
    setTabRetriever: (value: () => Tab[]) => void;
}

function WindowCard({ window, setTabRetriever }: WindowCardProps) {
    // only show incog groups/tabs if you are in an incog window (setting to separate incog from normal)
    // probably just pass this in
    // chrome.windows.getCurrent({ populate: false, windowTypes: undefined }, (window) => {
    //     window.incognito;
    // });

    const [selectedTabs, setSelectedTabs] = useState<boolean[]>(Array(window.tabs!.length).fill(false));

    const onTabRowClick = (index: number) =>
        setSelectedTabs((value) => {
            // should I not be editing value here?
            const newValue = value.slice();
            newValue[index] = !newValue[index];
            return newValue;
        });

    const tabs = window.tabs!.map((tab) => TabFromChrome(tab));

    useEffect(
        () =>
            setTabRetriever(() => {
                return selectedTabs
                    .map((selected, index) => (selected ? tabs[index] : undefined))
                    .filter((sel) => sel !== undefined) as Tab[];
            }),
        [selectedTabs]
    );

    return (
        <StyledWindowCard heightBefore={1} heightAfter={4} expanded={false}>
            <StyledWindowCardTopAppBar
                onClick={() => setSelectedTabs((value) => Array(value.length).fill(!value.every((i) => i)))}
            >
                <StyledTitleBar>{`Window: ${window.id}`}</StyledTitleBar>
            </StyledWindowCardTopAppBar>
            {/* // shown={expanded} */}
            <Divider shown={true} />
            <StyledTabListContainer expanded={true}>
                {tabs.map((tab, index) => (
                    // onSelect?
                    // role='selectable'
                    <TabDisplayRow
                        selected={selectedTabs[index]}
                        tab={tab}
                        incognito={window.incognito}
                        index={index}
                        onClick={onTabRowClick}
                    />
                ))}
            </StyledTabListContainer>
        </StyledWindowCard>
    );
}

export default WindowCard;
