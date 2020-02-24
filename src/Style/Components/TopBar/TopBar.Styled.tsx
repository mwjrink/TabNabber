import styled from 'styled-components';
import { FlexProps, DefaultProps, defaults, flex } from '../../Containers.Styled';

export const StyledTopBar = styled.div<FlexProps & DefaultProps>`
    ${defaults}
    ${flex}

    /* override defaults */
    border-radius: 0px;

    position: -webkit-sticky; /* Safari */ /* is this generated? */
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 10%;
    z-index: 10;

    padding: 0px 2rem;

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.onPrimary};
`;
