import React from 'react';
import { StyledBurger } from './Burger.Styled';

const Burger = ({ toggled, setToggled }: { toggled: boolean; setToggled: (value: boolean) => void }) => {
    return (
        <StyledBurger toggled={toggled} onClick={() => setToggled(!toggled)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default Burger;
