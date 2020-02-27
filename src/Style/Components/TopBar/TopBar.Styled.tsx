import styled from 'styled-components';
import { DefaultProps, defaults, flex, FlexProps } from '../../Containers.Styled';
import { Text } from '../../Text.Styled';
import { AnimationDurTFn } from '../../utils';

export const StyledTopBar = styled.div<FlexProps & DefaultProps>`
    ${defaults}
    ${flex}

    /* override defaults */
    border-radius: 0px;

    width: 100%;
    height: 10%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

    padding: 0px 2rem;

    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.onPrimary};
`;

interface TitleProps {
    hidden: boolean;
}

export const Title = styled(Text.H4)<TitleProps>`
    transition: opacity ${({ theme, hidden }) => AnimationDurTFn(theme, !hidden)};
    opacity: ${({ hidden }) => hidden ? '0' : '1'};
    /* margin-left: ${({ hidden }) => hidden ? '-10rem' : '0'}; */
`;
