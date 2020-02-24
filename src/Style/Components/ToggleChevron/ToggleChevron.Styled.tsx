import styled from 'styled-components';

interface StyledToggleChevronProps {
    toggled: boolean;
    backgroundColor: string;
}

export const StyledToggleChevron = styled.span<StyledToggleChevronProps>`
    width: 1rem;
    height: 1rem;
    display: inline-block;
    position: relative;

    &::after,
    &::before {
        content: ' ';
        top: 50%;
        position: absolute;
        width: 0.65rem;
        height: 0.15rem;
        background: ${({ backgroundColor }) => backgroundColor};
        display: inline-block;
        transition: transform
            ${({
                toggled,
                theme: {
                    animation: { inSpeed, outSpeed, inTimingFn, outTimingFn },
                },
            }) => (toggled ? inSpeed.concat(' ', inTimingFn) : outSpeed.concat(' ', outTimingFn))};
    }

    &::before {
        left: -1%;
        transform: ${({ toggled }) => (toggled ? 'rotate(45deg)' : 'rotate(-45deg)')};
    }
    &::after {
        right: 0%;
        transform: ${({ toggled }) => (toggled ? 'rotate(-45deg)' : 'rotate(45deg)')};
    }
`;
