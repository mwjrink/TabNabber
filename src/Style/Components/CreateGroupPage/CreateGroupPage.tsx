import { StyledCreateGroupPage } from './CreateGroupPage.Styled';
import React from 'react';
import { useSettingsContext } from '../../../utils';

interface CreateGroupPageProps {
    show: boolean;
    setCreatingGroup: (value: boolean) => void;
}

function CreateGroupPage({ show, setCreatingGroup }: CreateGroupPageProps) {
    const settings = useSettingsContext();
    return (
        // pseudo element for animating
        // when animation ends, swap the real element in
        <StyledCreateGroupPage
            hidden={!show}
            screenWidth={settings.width}
            screenHeight={settings.height}
            onClick={() => setCreatingGroup(false)}
        >
            HELLO!
        </StyledCreateGroupPage>
    );
}

export default CreateGroupPage;
