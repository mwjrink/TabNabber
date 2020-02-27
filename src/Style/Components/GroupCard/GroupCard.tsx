import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { TabGroup } from '../../../types';
import { Text } from '../../Text.Styled';
import TabDisplayRow from '../TabDisplayRow';
import ToggleChevron from '../ToggleChevron';
import { StyledGroupCard, StyledGroupCardTopAppBar, StyledTabListContainer, StyledTitleBar } from './GroupCard.Styled';
import { Divider } from '../../Layout.Styled';

interface GroupCardProps {
    group: TabGroup;
    index: number;
    // name: string;
    // created: Date;
    // tabs: Tab[];
}

function GroupCard({ group, index }: GroupCardProps) {
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme() as any;

    const dateString = new Date(group?.created)
        .toDateString()
        .split(' ')
        .slice(1)
        .join(' ');

    return (
        <StyledGroupCard expanded={expanded} style={index !== 0 ? { marginTop: theme.spacing.gutter } : undefined}>
            <StyledGroupCardTopAppBar onClick={() => setExpanded(!expanded)}>
                <StyledTitleBar>
                    <Text.H6>{group.name}</Text.H6>
                    <Text.Caption
                        style={{ color: theme.colors.unfocusedDark }}
                    >{`${dateString} - ${group.tabs.length} tabs`}</Text.Caption>
                </StyledTitleBar>
                <ToggleChevron toggled={expanded} backgroundColor={theme.colors.unfocusedDark} />
            </StyledGroupCardTopAppBar>
            <Divider shown={expanded} />
            <StyledTabListContainer expanded={expanded}>
                {expanded && group.tabs.map((tab, index) => <TabDisplayRow tab={tab} incognito={group.incognito} key={index} />)}
            </StyledTabListContainer>
        </StyledGroupCard>
    );
}

export default GroupCard;
