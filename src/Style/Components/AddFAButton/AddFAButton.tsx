import { StyledAddFAButton } from './AddFAButton.Styled';
import React from 'react';

interface AddFAButtonProps {
    onClick: () => void;
}

function AddFAButton({ onClick }: AddFAButtonProps) {
    return <StyledAddFAButton onClick={onClick} />;
}

export default AddFAButton;
