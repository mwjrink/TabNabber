import React from 'react';
import { Tab } from '../../../types';
import {
    Favicon,
    HeaderContainer,
    NewWindowButton,
    StyledTabDisplayRow,
    Title,
} from './TabDisplayRow.Styled';
import { TagsContainer } from '../TagsInputBar/TagsInputBar.Styled';

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
    onClick: (index: number) => void;
    selected: boolean;
    index: number;
}

function TabDisplayRow({ tab, incognito, onClick, selected, index }: TabDisplayRowProps) {
    return (
        <StyledTabDisplayRow selected={selected} onClick={() => onClick(index)}>
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
