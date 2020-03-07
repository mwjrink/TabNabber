import { StyledFAButton } from './FAButton.Styled';
import React from 'react';

interface FAButtonProps {
    onClick: () => void;
    children: any;
}

function FAButton({ onClick, children }: FAButtonProps) {
    return <StyledFAButton heightBefore={8} heightAfter={16} onClick={onClick}>{children}</StyledFAButton>;
}

export default FAButton;

// The FAB can transform into a new surface that spans the entire screen.
// This type of transformation is typically for creating new content.

// https://material.io/components/buttons-floating-action-button/#types-of-transitions
