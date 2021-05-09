import styled from 'styled-components';

const KeyboardBase = styled.div`
    background: ${props => props.theme === 'dark' ? '#000' : '#e2e2e2'};
    color: ${props => props.theme === 'dark' ? '#555' : '#000'};
    font: bold 14px Helvetica, Arial;
    padding: 0 8px 8px;
    position: relative;
    -moz-user-select: none;
    -webkit-user-select: none;
    width: 870px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    transition: .3s ease-out;
`

const Button = styled.button`
    background: ${props => props.theme === 'dark' ? '#2d2d2d' : '#fff'};
    color: ${props => props.theme === 'dark' ? '#f5f5f5' : '#000'};
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    &:focus {
        outline: none;
    }
    &:active, &:hover {
        background-color: ${props => props.theme === 'dark' ? '#686869' : '#b3b3b3'};
        color: ${props => props.theme === 'dark' ? '#f5f5f5' : '#000'};
        background-size: 100%;
        transition: background .3s
    }
`

export {
    KeyboardBase,
    Button
}