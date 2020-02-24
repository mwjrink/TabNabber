import React from 'react';
import { StyledToggleChevron } from './ToggleChevron.Styled';

interface ToggleChevronProps {
    toggled: boolean;
    backgroundColor: string;
}

function ToggleChevron({ toggled, backgroundColor }: ToggleChevronProps) {
    return <StyledToggleChevron toggled={toggled} backgroundColor={backgroundColor} />;
}

export default ToggleChevron;
