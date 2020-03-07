import React, { useEffect, useState, useReducer, useRef } from 'react';
import Drawer from '../../Style/Components/Drawer';
import GroupCard from '../../Style/Components/GroupCard';
import TopBar from '../../Style/Components/TopBar';
import { TabGroup, Tab } from '../../types';
import { useSettingsContext } from '../../utils';
import { OverlayDiv, PopoutContainer, PopoutPage } from './Styled';
import FAButton from '../../Style/Components/FAButton';
import CreateGroupPage from '../../Style/Components/CreateGroupPage';
import AddIcon from '../../Style/Components/AddIcon';
import { FAButtonIcon } from '../../Style/Components/FAButton/FAButton.Styled';

type State = 'MainPage' | 'CreatingGroup';
interface AppState {
    title: string;
    key: State;
    FABOnClick?: () => void;
    nextState: State;
    FABIcon: JSX.Element;
}

export function Popout() {
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);
    const [tabGroups, setTabGroups] = useState<TabGroup[]>([]);
    const tabRetriever = useRef<() => Tab[]>(() => []);

    const addTabGroup = (group: TabGroup) => setTabGroups((value) => [...value, group]);

    const modifyTabGroup = (group: TabGroup, index: number) =>
        setTabGroups((value) => [...value.slice(0, index), group, ...value.slice(index + 1)]);

    const deleteTabGroup = (index: number) =>
        setTabGroups((value) => [...value.slice(0, index), ...value.slice(index + 1)]);

    const initialReducerState: AppState = {
        title: 'Groups',
        key: 'MainPage',
        FABOnClick: undefined,
        nextState: 'CreatingGroup',
        FABIcon: <AddIcon />,
    };

    function reducer(state: AppState, action: State): AppState {
        switch (action) {
            case 'MainPage':
                return {
                    title: 'Groups',
                    key: action,
                    FABOnClick: undefined,
                    nextState: 'CreatingGroup',
                    FABIcon: <AddIcon />,
                };
            case 'CreatingGroup':
                return {
                    title: 'Nab Tabs',
                    key: action,
                    FABOnClick: () =>
                        addTabGroup({
                            name: new Date().toLocaleString(),
                            created: new Date(),
                            tabs: tabRetriever.current(),
                            incognito: false,
                            tags: [],
                        }),
                    nextState: 'MainPage',
                    FABIcon: <FAButtonIcon src="icons/icons/svg/check.svg" alt="check" invert />,
                };
            default:
                throw new Error(`Unknown state was pushed: ${action}`);
        }
    }

    const [state, dispatch] = useReducer(reducer, initialReducerState);

    const settings = useSettingsContext();

    // add a UUID key or something?
    chrome?.storage?.sync.get(['TabNabberGroups'], function(result) {
        console.log('Value currently is ' + result.key);
    });

    useEffect(() => {
        const value = localStorage.getItem('TabNabber_TabGroups');
        if (Boolean(value)) {
            setTabGroups(JSON.parse(value!));
        }
        // else {
        //     setTabGroups(JSON.parse(parseable));
        //     console.log('parseable');
        // }
    }, [setTabGroups]);

    // if (!windows) return <>Loading</>;

    useEffect(() => {
        localStorage.setItem('TabNabber_TabGroups', JSON.stringify(tabGroups));
    }, [tabGroups]);

    return (
        <PopoutContainer width={settings.width} height={settings.height}>
            <PopoutPage flexDirection="column" justifyContent="flex-start">
                {tabGroups.sort((a, b) => b.created.getTime() - a.created.getTime()).map((group, index) => (
                    <GroupCard
                        key={group.created.toString()}
                        group={group}
                        index={index}
                        deleteTabGroup={() => deleteTabGroup(index)}
                        modifyTabGroup={(group: TabGroup) => modifyTabGroup(group, index)}
                    />
                ))}
            </PopoutPage>

            <OverlayDiv onClick={() => setNavDrawerOpen(false)} show={navDrawerOpen} />
            <Drawer open={navDrawerOpen} />

            <CreateGroupPage show={state.key === 'CreatingGroup'} tabRetriever={tabRetriever} />

            {/* KEEP THIS LAST */}
            <TopBar burgerToggled={navDrawerOpen} toggleBurger={setNavDrawerOpen} title={state.title} />

            <FAButton
                onClick={() => {
                    state.FABOnClick && state.FABOnClick();
                    dispatch(state.nextState);
                }}
            >
                {state.FABIcon}
            </FAButton>
        </PopoutContainer>
    );
}
