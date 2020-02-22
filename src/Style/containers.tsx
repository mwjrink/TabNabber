import styled, { css } from 'styled-components';
import { BoxShadow } from './utils';
import { theme } from './theme';

interface DefaultProps {
    height?: number;
}

const defaults = css<DefaultProps>`
    border-radius: 2px;
    border: none;
    box-shadow: ${({ height }) => BoxShadow(height ?? 3)};
`;

interface FlexProps {
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
}

const flex = css<FlexProps>`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
    flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
`;

export const Card = styled.div`
    ${flex}
    ${defaults}
`;

export const Page = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0px ${theme.spacing.margin};
    background: ${theme.colors.background.lightTheme.dark};
`;
