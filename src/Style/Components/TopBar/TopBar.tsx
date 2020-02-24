import React from 'react';
import Burger from '../Burger';
import { StyledTopBar } from './TopBar.Styled';
import { Text } from '../../Text.Styled';
import { Spacer } from '../../Containers.Styled';

interface TopBarProps {
    navDrawerOpen: boolean;
    setNavDrawerOpen: (value: boolean) => void;
}

function TopBar({ navDrawerOpen, setNavDrawerOpen }: TopBarProps) {
    return (
        <StyledTopBar justifyContent="space-between" alignItems="center" flexDirection="row" height={4}>
            <Burger toggled={navDrawerOpen} setToggled={setNavDrawerOpen} />
            <Text.H4>Title ;^)</Text.H4>
            <Spacer width="2rem" height="2rem" />
        </StyledTopBar>
    );
}

export default TopBar;
