import styled from 'styled-components';
import { BoxShadow } from '../../utils';

interface StyledDrawerProps {
    open: boolean;
}

export const StyledDrawer = styled.nav<StyledDrawerProps>`
    box-shadow: ${BoxShadow(3)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors.surface};
    height: 100vh;
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform ${({ theme, open }) => (open ? theme.animation.inSpeed : theme.animation.outSpeed)}
        ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-101%)')};

    /* Don't fret. try this (quick IN, slow OUT):

.main img {
  width: 25%;
  height: 100%;
  transition: width 2s ease;
}
.main img:hover {
  width: 50%;
  transition: width .5s ease;
} */

    @media (max-width: 20%) {
        width: 100%;
    }

    a {
        width: 100%;
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.colors.onSurface};
        background: ${({ theme }) => theme.colors.surface};
        text-decoration: none;
        transition: background ${({ theme, open }) => (open ? theme.animation.inSpeed : theme.animation.outSpeed)} linear;

        @media (max-width: 20%) {
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover {
            background: ${({ theme }) => theme.colors.secondary};
        }
    }
`;
