import React from "react";
import { StyledAddIcon } from "./AddIcon.Styled";
import { useTheme } from "styled-components";

function AddIcon() {
    const theme = useTheme() as any;
    return <StyledAddIcon color={theme.colors.onPrimary} />;
}

export default AddIcon;
