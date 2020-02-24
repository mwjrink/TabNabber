import styled from 'styled-components';
import { BoxShadow } from '../../utils';

interface StyledGroupCardProps {
    expanded: boolean;
}

export const StyledGroupCard = styled.div<StyledGroupCardProps>`
    border-radius: 2px;
    border: none;

    transition: height ${({ expanded, theme }) => (expanded ? theme.animation.inSpeed : theme.animation.outSpeed)};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.onSurface};
    
    /* margin: ${({ theme }) => theme.colors.onSurface}; */
    
    position: relative;
    width: 100%;

    box-shadow: ${BoxShadow(1)};
    opacity: 1;

    &::after {
        content: ' ';    

        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        border-radius: 2px;
        border: none;

        box-shadow: ${BoxShadow(4)};
        opacity: 0;
        transition: opacity ${({
            theme: {
                animation: { outSpeed, outTimingFn },
            },
        }) => outSpeed.concat(' ', outTimingFn)};

        /* allow click through */
        pointer-events: none;
    }

    &:hover::after {
        opacity: 1;
        transition: opacity ${({
            theme: {
                animation: { inSpeed, inTimingFn },
            },
        }) => inSpeed.concat(' ', inTimingFn)};
    }
`;

/* display: flex;
    justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
    flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
    flex: ${({ flex }) => flex ?? 'none'};
    flex-wrap: ${({ flexWrap }) => flexWrap ?? 'nowrap'}; */

export const StyledTitleBar = styled.div`
    /* padding:  */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`;

export const StyledGroupCardTopAppBar = styled.div`
    /* padding:  */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 1rem 2rem;
`;
