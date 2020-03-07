import React from 'react';
import Burger from '../Burger';
import SearchBar from '../SearchBar';
import { StyledTopBar, Title } from './TopBar.Styled';

interface TopBarProps {
    title: string;
    burgerToggled: boolean;
    toggleBurger: (value: boolean) => void;
}

function TopBar({ title, burgerToggled, toggleBurger }: TopBarProps) {

    return (
        <StyledTopBar justifyContent="space-between" alignItems="center" flexDirection="row" materialHeight={4}>
            <Burger hidden={false} toggled={burgerToggled} setToggled={toggleBurger} />
            <Title hidden={false}>{title}</Title>
            <SearchBar />
            {/* // search for sure, maybe ?settings? */}
            {/* <Spacer width="2rem" height="2rem" />  */}
        </StyledTopBar>
    );
}

export default TopBar;
