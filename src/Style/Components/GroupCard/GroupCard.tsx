import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { TabGroup } from '../../../types';
import { Divider } from '../../Layout.Styled';
import { Text } from '../../Text.Styled';
import TabDisplayRow from '../TabDisplayRow';
import ToggleChevron from '../ToggleChevron';
import {
    StyledGroupCard,
    StyledGroupCardTopAppBar,
    StyledTabListContainer,
    StyledTitleBar,
    OptionsContainer,
    GroupActionButton,
    TagsInput,
    PillTag,
} from './GroupCard.Styled';

interface GroupCardProps {
    group: TabGroup;
    index: number;
    deleteTabGroup: () => void;
    modifyTabGroup: (group: TabGroup) => void;
    // name: string;
    // created: Date;
    // tabs: Tab[];
}

function GroupCard({ group, index, deleteTabGroup }: GroupCardProps) {
    const [expanded, setExpanded] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const theme = useTheme() as any;

    const dateString = new Date(group?.created)
        .toDateString()
        .split(' ')
        .slice(1)
        .join(' ');

    const onClick = (index: number) => {
        const tab = group.tabs[index];
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
        } else {
            // TODO: @Max, find a better way to do this
            // var a = document.createElement('a');
            // a.href = tab.url;
            // a.target = '_blank';
            // var evt = document.createEvent('MouseEvents');
            // //the tenth parameter of initMouseEvent sets ctrl key
            // // mac
            // evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, true, 0, null);
            // // windows
            // // evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
            // a.dispatchEvent(evt);
        }
    };

    const onInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const current = event.target.value;
        if (current.endsWith(' ') || current.endsWith(',')) {
            if (current.length > 1) {
                setTags((value) => [...value, current.trim()]);
                setInputValue('');
            }
        } else if (current.length === 0) {
            setInputValue(tags[tags.length - 1]);
            setTags((value) => value.slice(0, value.length - 1));
        }
    };

    // const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     if(event.key === 'Backspace') {
    //
    //     }
    //     if(event.key === 'Delete'){
    //
    //     }
    //     setInputValue((value) => sdfjlds);
    // }

    return (
        <StyledGroupCard
            heightBefore={1}
            heightAfter={4}
            expanded={expanded}
            style={index !== 0 ? { marginTop: theme.spacing.gutter } : undefined}
        >
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
            <OptionsContainer shown={expanded}>
                <GroupActionButton onClick={() => console.log('tag')}>
                    <img src="icons/icons/svg/tag.svg" alt='tag' />
                </GroupActionButton>
                <TagsInput onChange={onInputChanged} value={inputValue} />
                    {
                    // group.
                    // onKeyDown={onInputKeyDown}
                    tags.map((tag) => (
                        <PillTag pillColor="#2244FFAA">{tag}</PillTag>
                    ))}
                <GroupActionButton onClick={() => console.log('exit')}>
                    <img src="icons/icons/svg/exit.svg" alt='share' />
                </GroupActionButton>
                <GroupActionButton onClick={() => console.log('lock')}>
                    <img src="icons/icons/svg/lock.svg" alt='lock' />
                </GroupActionButton>
                <GroupActionButton onClick={deleteTabGroup}>
                    <img src="icons/icons/svg/trash.svg" alt='delete' />
                </GroupActionButton>
            </OptionsContainer>
            <Divider shown={expanded} />
            <StyledTabListContainer expanded={expanded}>
                {expanded &&
                    group.tabs.map((tab, index) => (
                        <TabDisplayRow
                            tab={tab}
                            incognito={group.incognito}
                            key={index}
                            onClick={onClick}
                            selected={false}
                            index={index}
                        />
                    ))}
            </StyledTabListContainer>
        </StyledGroupCard>
    );
}

export default GroupCard;
