import styled, { css } from 'styled-components';
import { Text } from '../../Text.Styled';

interface StyledTabDisplayRowProps {
    selected: boolean;
}

export const StyledTabDisplayRow = styled.div<StyledTabDisplayRowProps>`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    cursor: pointer;
    width: 100%;

    text-decoration: none;
    color: ${({ theme }) => theme.colors.onSurface};

    background: ${({ selected, theme }) => (selected ? theme.colors.unfocused : theme.colors.surface)};

    &:hover {
        background: ${({ selected, theme }) => (selected ? theme.colors.unfocused : theme.colors.unfocusedLight)};
    }

    &:active {
        background: ${({ theme }) => theme.colors.unfocused};
    }
`;

export const Title = styled(Text.S2)`
    color: ${({ theme }) => theme.colors.onSurface};
    display: flex;
    align-items: flex-start;
    position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    padding: 0rem 1rem;
    flex-grow: 1;
`;

export const HeaderContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    flex-grow: 1;
`;

export const Favicon = styled.img`
    position: relative;
    width: 1rem;
    height: 1rem;
`;

export const NewWindowButton = styled.button`
    width: 1rem;
    height: 1rem;
    border-radius: 50vmin;
    background: green;
    outline: none;
    border: none;
    opacity: 65%;
`;

// RIPPLE

export const RippleCss = css`
    .ripple-entering {
        opacity: 0.3;
        transform: scale(1);
        animation: ripple-enter 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .ripple-exiting {
        opacity: 0;
        animation: ripple-exit 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    @keyframes ripple-enter {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes ripple-exit {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

export const TagsContainer = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
`;
