import styled from 'styled-components';

const Key = styled.div`
    background: ${props => props.highlight ? '#4aff7a' : props.theme === 'dark' ? '#2d2d2d' : '#fff'};
    color: ${props => props.highlight ? '#000' : props.theme === 'dark' ? '#f5f5f5' : '#000'};
    border-radius: 5px;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: ${props => props.displayLeft ? 'flex-start' : 'center'};
    align-items: ${props => props.displayLeft ? 'flex-end' : 'center'};
    padding: ${props => props.displayLeft ? '0 10px 10px' : 0};
    height: 45px;
    margin: 5px;
    position: relative;
    vertical-align: top;
    width: ${props => props.width ? props.width : '54'}px;
    background-position: center;
    transition: 0.3s ease-out;
    &:active {
        background-color: ${props => props.theme === 'dark' ? '#686869' : '#b3b3b3'};
        color: ${props => props.theme === 'dark' ? '#f5f5f5' : '#000'};
        background-size: 100%;
        transition: background .3s
    }
`
const KeyBase = styled.div`
    display: inline-block;
`
const Section = styled.section`
    display: flex;
`

export {
    Key,
    KeyBase,
    Section
}