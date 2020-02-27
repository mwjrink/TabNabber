import React from 'react';
import { StyledBurger } from './Burger.Styled';

interface BurgerProps {
    toggled: boolean;
    setToggled: (value: boolean) => void;
    hidden: boolean
}

const Burger = ({ toggled, setToggled, hidden }: BurgerProps) => {
    return (
        <StyledBurger toggled={toggled} hidden={hidden} onClick={() => setToggled(!toggled)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default Burger;
