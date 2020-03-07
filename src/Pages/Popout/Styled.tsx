import styled from 'styled-components';
import { flex, FlexProps } from '../../Style/Containers.Styled';

interface OverlayDivProps {
    show: boolean;
}

export const OverlayDiv = styled.div<OverlayDivProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: black;
    opacity: ${({ show }) => (show ? '0.5' : '0')};
    transition: opacity ${({ theme, show }) => (show ? theme.animation.inSpeed : theme.animation.outSpeed)}
        ease-in-out;
    pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
`;
// potentially make the background some variant of ${ ... => theme.colors.onBackground + '7F' or '80' }

interface PopoutContainerProps {
    width: number;
    height: number;
}

export const PopoutContainer = styled.div<PopoutContainerProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
`;

export const PopoutPage = styled.div<FlexProps>`
    overflow: auto;
    position: absolute;
    width: 100%;
    height: 90%;
    left: 0;
    right: 0;
    bottom: 0;
    padding: ${({ theme }) => theme.spacing.margin};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.onBackground};

    ${flex}
`;
