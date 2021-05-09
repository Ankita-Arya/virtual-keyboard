class Utilities {
    getCommonParams = (inputRef) => {
        return {
            str: inputRef.current.value,
            positionStart: inputRef.current.selectionStart,
            positionEnd: inputRef.current.selectionEnd
        }
    }

    getCharToAdd = (keyPressed, shiftEnabled, capsEnabled) => {
        return shiftEnabled ? keyPressed.shiftChar : (capsEnabled ? keyPressed.capsChar : keyPressed.char);
    }

    addInputAt = (inputRef, keyPressed, shiftEnabled, capsEnabled, maxLengthBool) => {
        if (!inputRef?.current) throw new Error('No input reference provided')
        if (!keyPressed) throw new Error('No key specified')
        const { str, positionStart, positionEnd } = this.getCommonParams(inputRef)
        if (maxLengthBool) {
            if (inputRef.current?.maxLength) {
                const maxLength = inputRef.current?.maxLength;
                if (str.length === maxLength) {
                    return {
                        maxLengthCheckFailed: true
                    }
                };
            }
        }

        const charToAdd = this.getCharToAdd(keyPressed, shiftEnabled, capsEnabled)
        const carPosToSet = str.slice(0, positionStart).length + charToAdd.length
        let strToUpdate = '';

        if (positionStart === positionEnd && charToAdd.length === 1) {
            strToUpdate = [str.slice(0, positionStart), charToAdd, str.slice(positionStart + charToAdd.length - 1, str.length)].join('');
        } else {
            strToUpdate = [str.slice(0, positionStart), charToAdd, str.slice(positionEnd)].join('');
        }

        return {
            strToUpdate,
            carPosToSet
        }
    }

    removeAt = (inputRef) => {
        if (!inputRef?.current) throw new Error('No input reference provided')

        const { str, positionStart, positionEnd } = this.getCommonParams(inputRef)
        let carPosToSet = 0;
        if (str.length > 1) {
            if (positionStart === positionEnd) {
                carPosToSet = str.slice(0, positionStart - 2).length + 1
            } else {
                carPosToSet = positionStart;
            }
        } else {
            carPosToSet = 0;
        }
        let strToUpdate = '';
        if (positionStart === positionEnd) {
            strToUpdate = [str.slice(0, positionStart - 1), str.slice(positionEnd)].join('');
        } else {
            strToUpdate = [str.slice(0, positionStart), str.slice(positionEnd)].join('');
        }

        return {
            strToUpdate,
            carPosToSet
        }
    }
}

export default Utilities;