import styled from 'styled-components';
import { BoxShadow, AnimationDurTFn } from '../../utils';

interface StyledGroupCardProps {
    expanded: boolean;
}

export const StyledGroupCard = styled.div<StyledGroupCardProps>`
    border-radius: 2px;
    border: none;

    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.onSurface};
    
    /* margin: ${({ theme }) => theme.colors.onSurface}; */
    
    position: relative;
    width: 100%;

    box-shadow: ${BoxShadow(1)};
    opacity: 1;
    
    /* // force this onto its own layer to avoid rerendering unecessarily */
    /* // and yes, both of them prevent different rerenders and therefore have value */
    transform: translateZ(0);

    &::after {
        content: ' ';
        /* // force this onto its own layer to avoid rerendering unecessarily */
        /* // and yes, both of them prevent different rerenders and therefore have value */
        transform: translateZ(0);

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
        transition: opacity ${({ theme }) => AnimationDurTFn(theme, 'out')};

        /* allow click through */
        pointer-events: none;
    }

    &:hover::after {
        opacity: 1;
        transition: opacity  ${({ theme }) => AnimationDurTFn(theme, 'in')};
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

interface StyledTabListContainerProps {
    expanded: boolean;
}

export const StyledTabListContainer = styled.div<StyledTabListContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    /* // TODO: @Max, figure out these fucking transitions */
    /* max-height: ${({ expanded }) => (expanded ? '999px' : '0px')};
    opacity: ${({ expanded }) => (expanded ? '1' : '0')};
    transition: max-height
        ${({
            theme: {
                animation: { inSpeed, inTimingFn },
            },
        }) => '5s'.concat(' ', inTimingFn)};
        AnimationDurTFn(HRDRRDHDJD)
    transition-property: max-height, opacity; */
`;
