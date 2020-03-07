import styled from 'styled-components';
import { BoxShadowHoverFragment, BoxShadowHoverFragmentProps } from '../../CommonEffects.Styled';

export const StyledFAButton = styled.button<BoxShadowHoverFragmentProps>`
    ${BoxShadowHoverFragment}

    border: none;
    border-radius: 2px;
    border-radius: 50vmin;

    width: 56px;
    height: 56px;

    padding: 0;
    outline: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;

    right: 16px;
    bottom: 16px;
    position: fixed;

    &::before,
    &::after {
        border-radius: 50vmin;
    }
`;

interface FAButtonIconProps {
    invert: boolean;
}

export const FAButtonIcon = styled.img<FAButtonIconProps>`
    width: 24px;
    height: 24px;
    ${({ invert }) => (invert ? 'filter: invert(100%)' : '')};
`;
