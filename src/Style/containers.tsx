import styled, { css } from 'styled-components';
import { BoxShadow } from './utils';
import { theme } from './theme';

interface DefaultProps {
    height?: number;
}

// border-radius: 2px;
const defaults = css<DefaultProps>`
    border-radius: 4px;
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
    background: ${theme.colors.surface};
    color: ${theme.colors.onSurface};
`;

export const Page = styled.div`
    padding: 0px ${theme.spacing.margin};
    background: ${theme.colors.background};
    color: ${theme.colors.onBackground};
`;
