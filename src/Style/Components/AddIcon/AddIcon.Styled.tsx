import styled from 'styled-components';

interface StyledAddIcon {
    color: string;
}

export const StyledAddIcon = styled.div<StyledAddIcon>`
    /* opacity: 0; */
    pointer-events: none;
    position: relative;
    width: 24px;
    height: 24px;

    &::before,
    &::after {
        content: ' ';
        background-color: ${({ color }) => color};
        position: absolute;
    }

    &::before {
        top: 0;
        left: 11px;
        width: 2px;
        height: 24px;
    }

    &::after {
        left: 0;
        top: 11px;
        width: 24px;
        height: 2px;
    }
`;
