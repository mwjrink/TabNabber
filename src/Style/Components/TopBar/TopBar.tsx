import React, { useState } from 'react';
import Burger from '../Burger';
import SearchBar from '../SearchBar';
import { StyledTopBar, Title } from './TopBar.Styled';

interface TopBarProps {
    navDrawerOpen: boolean;
    setNavDrawerOpen: (value: boolean) => void;
}

function TopBar({ navDrawerOpen, setNavDrawerOpen }: TopBarProps) {
    const [sbActive, setSbActive] = useState();

    return (
        <StyledTopBar justifyContent="space-between" alignItems="center" flexDirection="row" materialHeight={4}>
            <Burger hidden={sbActive} toggled={navDrawerOpen} setToggled={setNavDrawerOpen} />
            <Title hidden={sbActive}>Groups</Title>
            <SearchBar active={sbActive} setActive={setSbActive} />
            {/* // search for sure, maybe ?settings? */}
            {/* <Spacer width="2rem" height="2rem" />  */}
        </StyledTopBar>
    );
}

export default TopBar;
