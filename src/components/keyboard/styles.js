import styled from 'styled-components';

const KeyboardBase = styled.div`
    background: ${props => props.theme === 'dark' ? '#000' : '#e2e2e2'};
    color: ${props => props.theme === 'dark' ? '#555' : '#fff'};
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

export {
    KeyboardBase
}