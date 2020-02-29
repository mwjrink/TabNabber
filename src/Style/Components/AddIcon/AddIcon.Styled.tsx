import styled from 'styled-components';

interface StyledAddIcon {
    color: string;
}

export const StyledAddIcon = styled.div<StyledAddIcon>`

    /* opacity: 0; */
    pointer-events: none;
    position: relative;
    width: 20px;
    height: 20px;

    &::before,
    &::after {
        content: ' ';
        background-color: ${({ color }) => color};
        position: absolute;
    }

    &::before {
        width: 2px;
        height: 20px;
        left: 9px;
        top: 0;
    }

    &::after {
        width: 20px;
        height: 2px;
        top: 9px;
        left: 0;
    }
`;
