import React from 'react';
import { Tab } from '../../../types';
import { Favicon, HeaderContainer, NewWindowButton, StyledTabDisplayRow, Title, TagsContainer } from './TabDisplayRow.Styled';

interface TabDisplayRowProps {
    tab: Tab;
    //{
    //     title: string;
    //     url: string; // pendingUrl?: string;
    //     favIconUrl: string;
    //     // index: number; ???
    //     pinned: boolean;
    //     incognito: boolean;
    // }
    incognito: boolean;
}

function TabDisplayRow({ tab, incognito }: TabDisplayRowProps) {
    // const openBackgroundTab = () => {
    //     var a = document.createElement("a");
    //     a.href = tab.url;
    //     var evt = document.createEvent("MouseEvents");
    //     //the tenth parameter of initMouseEvent sets ctrl key
    //     evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
    //                                 false, false, false, true, 0, null);
    //     a.dispatchEvent(evt);
    // };

    const click = () => {
        if (chrome.tabs) {
            chrome.tabs.create({
                // index?: number;
                // openerTabId?: number;
                url: tab.url,
                pinned: tab.pinned,
                // windowId?: number;
                active: false,
                selected: false,
            });
            // event.
        }
    };

    return (
        <StyledTabDisplayRow onClick={click}>
            <HeaderContainer>
                <Favicon src={tab.favIconUrl} />
                <Title>{tab.title}</Title>
                {/* <Text.Caption>{formattedUrl}</Text.Caption> */}
            </HeaderContainer>
            {/* <divider/> */}
            <TagsContainer>
                <NewWindowButton />
            </TagsContainer>
        </StyledTabDisplayRow>
    );
}

export default TabDisplayRow;
