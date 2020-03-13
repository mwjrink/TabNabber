import styled from 'styled-components';
// import { BoxShadowHoverFragment, BoxShadowHoverFragmentProps } from '../../CommonEffects.Styled';
import { CreateStyledTextSnippet } from '../../Text.Styled';

export const TagsInput = styled.input`
    width: 100%;
    min-width: 50%;

    /* height: 100%; */
    outline: none;
    border: none;
    color: ${({ theme }) => theme.colors.onSurface};
    padding: 0.5rem 0;

    ${({ theme }) => CreateStyledTextSnippet(theme.text.Body1)};
`;

/* height: 100%; */
export const TagsContainer = styled.div`
    width: 100%;

    flex-grow: 1;

    overflow-x: scroll;
    &&::-webkit-scrollbar {
        display: none;
    }

    position: relative;

    /* justify-content: flex-start; */

    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
/* scrollbar-color: transparent; */

interface PillTagProps {
    pillBackgroundColor: string;
    pillColor: string;
}

export const PillTag = styled.div<PillTagProps>`
    border-radius: 50vmin;
    height: 1.5rem;
    padding: 0.5rem;
    margin: 0 0.1rem;
    background: ${({ pillBackgroundColor }) => pillBackgroundColor};
    color: ${({ pillColor }) => pillColor};

    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;

    ${({ theme }) => CreateStyledTextSnippet(theme.text.Body1)}
`;
/* &::before {
x button on the right or left
} */
