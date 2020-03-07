import styled from 'styled-components';
import { CreateStyledTextSnippet } from '../../Text.Styled';
import { AnimationDurTFn } from '../../utils';

interface StyledSearchBarProps {
    active: boolean;
}

export const StyledSearchBar = styled.div<StyledSearchBarProps>`
    padding: 0 0.5rem 0.5rem 0;
    width: 2rem;
    height: 2rem;
    position: relative;
    cursor: pointer;

    &::before {
        content: ' ';
        border-radius: 50%;
        border: 3px solid ${({ theme }) => theme.colors.onPrimary};

        width: 1.6rem;
        height: 1.6rem;

        position: absolute;
        top: 0;
        left: 0;
        /* transition: all ${({ theme, active }) => AnimationDurTFn(theme, active)}; */
        /* transition-property: width, height, left; */

        background: ${({ theme }) => theme.colors.primary};
    }

    /* &::before {
        height: ${({ active }) => (active ? '2rem' : '')};
        width: ${({ active }) => (active ? '24rem' : '')};
        left: ${({ active }) => (active ? '-22rem' : '')};
    } */

    &::after {
        content: ' ';
        transform-origin: bottom right;
        transform: rotate(45deg);
        width: 0.875rem;
        height: 3px;
        background: white;

        position: absolute;
        right: 2px;
        bottom: 0;

        opacity: 1;
        /* transition: all ${({ theme, active }) => AnimationDurTFn(theme, active)}; */
        /* transition-property: width, bottom, right; */
    }
/* 
    &::after {
        width: ${({ active }) => (active ? '0' : '')};
        bottom: ${({ active }) => (active ? '0.35rem' : '')};
        right: ${({ active }) => (active ? '0.35rem' : '')};
    } */
`;

export const StyledSearchBarTextInput = styled.input<{ hidden: boolean }>`
    color: white;

    background: ${({ theme }) => theme.colors.primary};
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 0 1rem;
    outline: none;
    border: none;
    display: flex;
    pointer-events: ${({ hidden }) => hidden ? 'none' : 'auto'};

    color: ${({ theme }) => theme.colors.onPrimary};

    ${({ theme }) => CreateStyledTextSnippet(theme.text.Subtitle1)};

    /* // this should not be an animation */
    transition: opacity ${({ theme, hidden }) => AnimationDurTFn(theme, !hidden)};
    opacity: ${({ hidden }) => hidden ? '0' : '1'};

    &::placeholder {
        color: ${({ theme }) => theme.colors.onPrimary};
        opacity: 0.75;
    }
`;
