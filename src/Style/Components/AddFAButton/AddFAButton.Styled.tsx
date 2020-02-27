import styled from 'styled-components';
import { BoxShadow } from '../../utils';

export const StyledAddFAButton = styled.button`
    border-radius: 2px;
    border: none;
    box-shadow: ${BoxShadow(8)};
    width: 4rem;
    height: 4rem;
    border-radius: 50vmin;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    padding: 0;
    outline: none;

    &::before,
    &::after {
        content: ' ';
        background-color: ${({ theme }) => theme.colors.onPrimary};
        position: absolute;
    }

    &::before {
        width: 2px;
        height: 20px;
        left: 31px;
        top: 22px;
    }

    &::after {
        width: 20px;
        height: 2px;
        left: 22px;
        top: 31px;
    }

    &:hover {
    }

    &:active {
    }
`;

// TODO: @Max, disapear animation
