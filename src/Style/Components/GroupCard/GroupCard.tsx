import { StyledGroupCard, StyledTitleBar, StyledGroupCardTopAppBar } from './GroupCard.Styled';
import React, { useState } from 'react';
import { TabGroup } from '../../../types';
import { Text } from '../../Text.Styled';
import { useTheme } from 'styled-components';
import ToggleChevron from '../ToggleChevron';

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

    const dateString = group.created
        .toDateString()
        .split(' ')
        .slice(1)
        .join(' ');

    return (
        <StyledGroupCard expanded={expanded} style={index !== 0 ? { marginTop: theme.spacing.gutter } : undefined}>
            <StyledGroupCardTopAppBar onClick={() => setExpanded(!expanded)}>
                <StyledTitleBar>
                    <Text.H6>{group.name}</Text.H6>
                    {/* style={{ color: theme.colors. }} // grey subtext type shit */}
                    <Text.Caption>{`${dateString} - ${group.tabs.length} tabs`}</Text.Caption>
                </StyledTitleBar>
                {/* BLEH: grey */}
                <ToggleChevron toggled={expanded} backgroundColor="grey" />
            </StyledGroupCardTopAppBar>
            {expanded && <></>}
        </StyledGroupCard>
    );
}

export default GroupCard;
