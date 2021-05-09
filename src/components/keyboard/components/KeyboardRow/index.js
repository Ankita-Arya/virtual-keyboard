import React from 'react';
import { KeyboardKeyWidths } from '../../../../keysdata';
import {
    Key,
    KeyBase,
    Section
} from './styles';

const KeyboardRowComponent = (props) => {

    const getCharToDisplay = (keyData) => {
        if (keyData.displayText) return [keyData.displayText];
        if (props.shiftToggle) {
            return [keyData.shiftChar];
        } else if (props.capsToggle) {
            if (props.doubleCharDisplay) {
                return keyData.displayChars ? keyData.displayChars : [keyData.capsChar];
            }
            return [keyData.capsChar];
        } else {
            if (props.doubleCharDisplay) {
                return keyData.displayChars ? keyData.displayChars : [keyData.capsChar];
            }
            return [keyData.capsChar];
        }
    }

    const setHighlightBool = (item) => {
        if (item.functionName === '{shift}' && props.shiftToggle) return true;
        if (item.functionName === '{caps}' && props.capsToggle) return true;
        return false;
    }

    return (
        <Section>
            {props.keys.map((item, index) => (
                <KeyBase key={index}
                    onClick={() => props.onKeyPressFn(null, item)}>
                    <Key
                        theme={props.theme}
                        width={KeyboardKeyWidths[props.keyName][index]}
                        displayLeft={item.displayLeft}
                        highlight={setHighlightBool(item)}
                    >
                        <div>
                            {getCharToDisplay(item).map((charToDisplay, index2) => (
                                <div key={index2}>{charToDisplay}</div>
                            ))}
                        </div>
                    </Key>
                </KeyBase>
            ))}
        </Section>
    )
}

export default React.memo(KeyboardRowComponent);