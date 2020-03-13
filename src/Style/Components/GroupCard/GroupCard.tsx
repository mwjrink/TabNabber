import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { TabGroup } from '../../../types';
import { Divider } from '../../Layout.Styled';
import { Text } from '../../Text.Styled';
import TabDisplayRow from '../TabDisplayRow';
import ToggleChevron from '../ToggleChevron';
import {
    GroupActionButton,
    OptionsContainer,
    StyledGroupCard,
    StyledGroupCardTopAppBar,
    StyledTabListContainer,
    StyledTitleBar,
} from './GroupCard.Styled';
import TagsInputBar from '../TagsInputBar';

interface GroupCardProps {
    group: TabGroup;
    index: number;
    deleteTabGroup: () => void;
    modifyTabGroup: (group: TabGroup) => void;
    // name: string;
    // created: Date;
    // tabs: Tab[];
}

function GroupCard({ group, index, deleteTabGroup, modifyTabGroup }: GroupCardProps) {
    const [expanded, setExpanded] = useState(false);
    const [tags, setTags] = useState<string[]>(group.tags);
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

    useEffect(() => {
        modifyTabGroup({
            ...group,
            tags,
        });
        // eslint-disable-next-line
    }, [tags.length]);

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
                    <img src="icons/icons/svg/tag.svg" alt="tag" />
                </GroupActionButton>
                <TagsInputBar tags={tags} setTags={setTags} />
                <GroupActionButton onClick={() => console.log('exit')}>
                    <img src="icons/icons/svg/exit.svg" alt="share" />
                </GroupActionButton>
                <GroupActionButton onClick={() => console.log('lock')}>
                    <img src="icons/icons/svg/lock.svg" alt="lock" />
                </GroupActionButton>
                <GroupActionButton onClick={deleteTabGroup}>
                    <img src="icons/icons/svg/trash.svg" alt="delete" />
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
