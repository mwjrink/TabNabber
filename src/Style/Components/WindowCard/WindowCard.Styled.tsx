import styled from 'styled-components';
import { BoxShadowHoverFragment, BoxShadowHoverFragmentProps } from '../../CommonEffects.Styled';

interface StyledWindowCardProps {
    expanded: boolean;
}

export const StyledWindowCard = styled.div<StyledWindowCardProps & BoxShadowHoverFragmentProps>`
    ${BoxShadowHoverFragment}
    margin-top: ${({ theme }) => theme.spacing.gutter};

    border-radius: 2px;
    border: none;

    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.onSurface};
    
    /* margin: ${({ theme }) => theme.colors.onSurface}; */
    
    position: relative;
    width: 100%;
    
    &::before,
    &::after {
        border-radius: 2px;
        border: none;
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

export const StyledWindowCardTopAppBar = styled.div`
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
