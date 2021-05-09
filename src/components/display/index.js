import React, { useState, useRef } from 'react';
import KeyboardComponent from '../keyboard';
import {
    Monitor,
    Output,
    CheckBox,
    CheckBoxLabel,
    CheckBoxWrapper,
    ConfigButtonsContainer,
    Label
} from './styles';

const DisplayComponent = () => {
    const [input, updateInput] = useState();
    const TextInputRef = useRef(null);
    const [theme, setTheme] = useState('light');
    const [doubleCharDisplay, setDoubleCharDisplay] = useState(true);
    const [enableMaxLength, setEnableMaxLength] = useState(true);

    const onChangeInput = (e, val) => {
        updateInput(val);
    };

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const changeDoubleCharDisplay = () => {
        setDoubleCharDisplay(!doubleCharDisplay)
    }

    const changeMaxLengthBool = () => {
        setEnableMaxLength(!enableMaxLength)
    }

    return (
        <div>
            <Monitor theme={theme}>
                <Output placeholder="Use the keyboard below to add input"
                    maxLength='20' theme={theme}
                    value={input}
                    ref={TextInputRef} onChange={onChangeInput}
                >
                </Output>
            </Monitor>
            <KeyboardComponent
                theme={theme || 'dark'}
                textInputRef={TextInputRef}
                doubleCharDisplay={Boolean(doubleCharDisplay)}
                maxLengthBool={Boolean(enableMaxLength)}
                onChangeInput={onChangeInput}
            />
            <ConfigButtonsContainer>
                <Label>Dark Theme</Label>
                <CheckBoxWrapper>
                    <CheckBox id="theme-checkbox" type="checkbox"
                        onChange={changeTheme} checked={theme === 'dark'}
                    />
                    <CheckBoxLabel htmlFor="theme-checkbox" />
                </CheckBoxWrapper>
                <Label>Double Char Display</Label>
                <CheckBoxWrapper>
                    <CheckBox id="chardisplay-checkbox" type="checkbox"
                        onChange={changeDoubleCharDisplay} checked={doubleCharDisplay}
                    />
                    <CheckBoxLabel htmlFor="chardisplay-checkbox" />
                </CheckBoxWrapper>
                <Label>Enable Max Length</Label>
                <CheckBoxWrapper>
                    <CheckBox id="minlengthbool-checkbox" type="checkbox"
                        onChange={changeMaxLengthBool} checked={enableMaxLength}
                    />
                    <CheckBoxLabel htmlFor="minlengthbool-checkbox" />
                </CheckBoxWrapper>
            </ConfigButtonsContainer>

        </div>
    )
}

export default React.memo(DisplayComponent);