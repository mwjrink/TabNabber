import styled from 'styled-components';
import { BoxShadow, AnimationDurTFn } from '../../utils';

export const StyledFAButton = styled.button`
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
    cursor: pointer;
    transform: translateZ(0);

    &::after {
        content: ' ';
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50vmin;
        box-shadow: ${BoxShadow(12)};
        transform: translateZ(0);
        transition: opacity ${({ theme }) => AnimationDurTFn(theme, 'out')};
    }

    &:hover::after {
        opacity: 1;
        transition: opacity ${({ theme }) => AnimationDurTFn(theme, 'in')};
    }
`;
