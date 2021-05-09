import React, { useState, useEffect } from 'react';
import KeyboardRowComponent from './components/KeyboardRow';
import { KeyboardBase } from './styles';
import { KeyboardData } from '../../keysdata';
import Utilities from '../../utils';

const KeyboardComponent = (props) => {
    const [shiftToggle, updateShiftToggle] = useState(false);
    const [capsToggle, updateCapsToggle] = useState(false);
    const utilities = new Utilities(0, 0);
    const setInputAndCaret = (textInputRef, res) => {
        if (res.maxLengthCheckFailed) return;
        textInputRef.current.value = res.strToUpdate;
        textInputRef.current.focus();
        textInputRef.current.setSelectionRange(res.carPosToSet, res.carPosToSet);
        updateInput(textInputRef.current.value);
    }

    const onKeyPress = (e, pressedKey) => {
        if (pressedKey.deleteKey) {
            if (!props.textInputRef.current.selectionEnd || !props.textInputRef.current.value) return;
            const res = utilities.removeAt(props.textInputRef)
            setInputAndCaret(props.textInputRef, res)
        } else if (pressedKey.functionName) {
            if (pressedKey.functionName === '{shift}') {
                updateShiftToggle(!shiftToggle);
                updateCapsToggle(false);
            } else if (pressedKey.functionName === '{caps}') {
                updateCapsToggle(!capsToggle);
                updateShiftToggle(false);
            }

        } else {
            const res = utilities.addInputAt(props.textInputRef, pressedKey, shiftToggle, capsToggle, props.maxLengthBool)
            setInputAndCaret(props.textInputRef, res)
        }
    };

    const setInputValOnMaxLengthBoolChange = (textInputRef) => {
        const inputVal = textInputRef.current.value;
        if (!inputVal) return;

        const maxLength = textInputRef.current.maxLength;
        if (inputVal.length > maxLength) {
            const updateInput = {
                strToUpdate: inputVal.slice(0, maxLength),
                carPosToSet: maxLength
            }
            setInputAndCaret(textInputRef, updateInput)
        }
    }

    const updateInput = (val) => {
        if (props.onChangeInput)
            props.onChangeInput(null, val);
    }

    useEffect(() => {
        if (props.maxLengthBool)
            setInputValOnMaxLengthBoolChange(props.textInputRef);
    }, [props.maxLengthBool])

    return (
        <KeyboardBase
            theme={props.theme || 'light'}>
            {Object.keys(KeyboardData).map((item, index) => (
                <KeyboardRowComponent
                    onKeyPressFn={onKeyPress}
                    keys={KeyboardData[item]}
                    key={index}
                    shiftToggle={shiftToggle}
                    capsToggle={capsToggle}
                    theme={props.theme || 'light'}
                    doubleCharDisplay={props.doubleCharDisplay}
                />
            ))}
        </KeyboardBase>
    )
}

export default React.memo(KeyboardComponent);