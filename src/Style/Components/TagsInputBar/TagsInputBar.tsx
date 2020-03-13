import React, { useState } from 'react';
import { generateColor } from '../../utils';
import { PillTag, TagsInput, TagsContainer } from './TagsInputBar.Styled';

interface TagsInputBar {
    tags: string[];
    setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

function TagsInputBar({ tags, setTags }: TagsInputBar) {
    const [inputValue, setInputValue] = useState('');

    const onInputChanged = (event: any) => {
        const current = event.currentTarget.value;
        if (current.endsWith(' ') || current.endsWith(',')) {
            if (current.length > 1) {
                setTags((value) => [...value, current.replace(/^[,\s]+|[,\s]+$/gm, '')]);
                setInputValue('');
            }
        } else if (current.length === 0) {
            setInputValue(tags[tags.length - 1]);
            setTags((value) => value.slice(0, value.length - 1));
        } else {
            setInputValue(current);
        }
    };

    const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const current = event.currentTarget.value;
        if (event.key === 'Backspace') {
            if (current.length === 0 && tags.length !== 0) {
                setInputValue(tags[tags.length - 1] + ' ');
                setTags((value) => value.slice(0, value.length - 1));
            }
        }
        if (event.key === 'Enter') {
            if (current.length > 1) {
                setTags((value) => [...value, current.replace(/^[,\s]+|[,\s]+$/gm, '')]);
                setInputValue('');
            }
        }
        // if (event.key === 'Delete') {
        // }
        // setInputValue((value) => sdfjlds);
    };

    return (
        <TagsContainer>
            {tags.map((tag) => {
                const [backgroundColor, color] = generateColor(tag);
                return (
                    <PillTag pillColor={color} pillBackgroundColor={backgroundColor}>
                        {tag}
                    </PillTag>
                );
            })}
            <TagsInput onChange={onInputChanged} onKeyDown={onInputKeyDown} value={inputValue} placeholder='Enter a tag name...' />
        </TagsContainer>
    );
}

export default TagsInputBar;
