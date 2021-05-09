import React, { useState, useEffect } from 'react';
import KeyboardRowComponent from './components/KeyboardRow';
import { KeyboardBase, Button } from './styles';
import {
    CheckBox,
    CheckBoxLabel,
    CheckBoxWrapper,
    ConfigButtonsContainer,
    Label
} from '../common/styles';
import { KeyboardData } from '../../keysdata';
import Utilities from '../../utils';

const KeyboardComponent = (props) => {
    const [shiftToggle, updateShiftToggle] = useState(false);
    const [capsToggle, updateCapsToggle] = useState(false);
    const [rearrangeKeysBool, setRearrangeKeysBool] = useState(false);
    const [keysRearranged, setKeysRearranged] = useState(false);
    const [initialLoad, setInitialLoad] = useState(0);
    const [keyboardData, setKeyboardData] = useState(JSON.parse(JSON.stringify(KeyboardData)));
    const utilities = new Utilities(0, 0);
    const setInputAndCaret = (textInputRef, res) => {
        if (res.maxLengthCheckFailed) return;

        if (rearrangeKeysBool) {
            setInitialLoad(initialLoad + 1);
        }
        
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

    const arrangeArrayInRandomOrder = () => {
        if (initialLoad && rearrangeKeysBool) {
            setKeysRearranged(true)
            let reArrangedData = JSON.parse(JSON.stringify(keyboardData));
            Object.keys(reArrangedData).forEach((item) => {
                reArrangedData[item] = keyboardData[item].sort(() => Math.random() - 0.5)
            })
            setKeyboardData(JSON.parse(JSON.stringify(reArrangedData)))
        }
    }

    const toggleKeyRearrangement = () => {
        if (rearrangeKeysBool) {
            setInitialLoad(0)
        }
        setRearrangeKeysBool(!rearrangeKeysBool)
    }

    const resetLayout = () => {
        setKeyboardData(JSON.parse(JSON.stringify(KeyboardData)));
        setKeysRearranged(false)
    }

    useEffect(() => {
        if (props.maxLengthBool)
            setInputValOnMaxLengthBoolChange(props.textInputRef);
    }, [props.maxLengthBool])

    useEffect(() => {
        arrangeArrayInRandomOrder();
    }, [initialLoad])

    return (
        <KeyboardBase
            theme={props.theme || 'light'}>
            <ConfigButtonsContainer justify='flex-end'>
                <Label>Rearrange Keys On Keypress</Label>
                <CheckBoxWrapper>
                    <CheckBox id="layout-toggle-checkbox" type="checkbox"
                        onChange={toggleKeyRearrangement} checked={rearrangeKeysBool}
                    />
                    <CheckBoxLabel htmlFor="layout-toggle-checkbox" />
                </CheckBoxWrapper>
                {
                    keysRearranged ? <Button
                        theme={props.theme || 'light'}
                        onClick={() => resetLayout()}
                    >
                        Reset Keys Arrangement
                </Button> : null
                }

            </ConfigButtonsContainer>
            {Object.keys(keyboardData).map((item, index) => (
                <KeyboardRowComponent
                    keyName={item}
                    onKeyPressFn={onKeyPress}
                    keys={keyboardData[item]}
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