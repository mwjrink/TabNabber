import styled, { keyframes } from 'styled-components';
import { AnimationDurTFn } from '../../utils';

interface StyledCreateGroupPageProps {
    hidden: boolean;
    screenWidth: number;
    screenHeight: number;
}

const grow = (screenWidth: number, screenHeight: number) => keyframes`
0% {
    /* border-radius: 50%; */

    opacity: 1;

    transform: translate(calc(${screenWidth} - 6rem), calc(${screenHeight} - 6rem));
    /* scaleY(calc(2rem/${screenHeight})); */
     /* scaleX(calc(calc(2rem/100vw)))  */
}

100% {
    /* border-radius: 0px; */

    opacity: 1;

    transform: scaleY(1) scaleX(1) translate(0, 0);
}
`;

export const StyledCreateGroupPage = styled.div<StyledCreateGroupPageProps>`
    background-color: ${({ theme }) => theme.colors.error};
    border-radius: 0px;

    transform: scaleY(1) scaleX(1) translate(0, 0);

    position: absolute;
    bottom: 0;
    right: 0;

    max-width: 100%;
    width: 100%;
    max-height: 100%;
    height: 100%;

    opacity: 1;

    animation: ${({ screenWidth, screenHeight }) => grow(screenWidth, screenHeight)}
        ${({ hidden, theme }) =>
            [AnimationDurTFn(theme, hidden), '0', '1', hidden ? ' reverse' : ' normal', 'none'].join(' ')};
`;
