import styled, { keyframes } from 'styled-components';
import { CreateStyledTextSnippet } from '../../Text.Styled';
import { AnimationDurTFn, BoxShadow } from '../../utils';

interface StyledCreateGroupPageProps {
    hidden: boolean;
    screenWidth: number;
    screenHeight: number;
}

const grow = (screenWidth: number, screenHeight: number) => keyframes`
0% {
    /* border-radius: 50%; */

    opacity: 1;

    transform: translate(calc(${screenWidth}px - 16px), calc(${screenHeight}px - 16px)) scaleY(calc(56/${screenHeight})) scaleX(calc(56/${screenWidth}));
}

100% {
    /* border-radius: 0px; */

    opacity: 1;

    transform: scaleY(1) scaleX(1) translate(0, 0);
}
`;

export const StyledCreateGroupPage = styled.div<StyledCreateGroupPageProps>`
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0px;

    transform-origin: ${({ screenWidth, screenHeight }) =>
        `calc(${screenWidth}px - 26px) calc(${screenHeight}px - 26px)`};
    transform: ${({ screenWidth, screenHeight, hidden }) =>
        hidden
            ? `/*translate(calc(${screenWidth}px - 16px), calc(${screenHeight}px - 16px))*/ scaleY(calc(39/${screenHeight})) scaleX(calc(39/${screenWidth}))`
            : `scaleY(1) scaleX(1) translate(0, 0);`};
    opacity: ${({ hidden }) => (hidden ? '0' : '1')};
    transition: transform ${({ hidden, theme }) => AnimationDurTFn(theme, hidden)};
    transition-property: transform, opacity;

    position: absolute;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 90%;

    padding: ${({ theme }) => theme.spacing.margin};
    padding-top: 0;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    overflow: scroll;

    /* animation: ${({ screenWidth, screenHeight }) => grow(screenWidth, screenHeight)}\
     ${({ hidden, theme }) =>
         [AnimationDurTFn(theme, hidden), '0', '1', hidden ? 'reverse' : 'normal', 'none'].join(' ')}; */
`;

export const BottomBar = styled.div`
    box-shadow: ${BoxShadow(4)};
    background: ${({ theme }) => theme.colors.surface};
    height: 88px;
    width: 100%;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 0.5rem;
`;

export const NameInput = styled.input`
    height: 50%;
    width: 100%;
    outline: none;
    border: none;
    ${({ theme }) => CreateStyledTextSnippet(theme.text.Body1)};
    flex-grow: 1;
`;
