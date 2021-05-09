import styled from 'styled-components';

const Monitor = styled.div`
    position: relative;
    width: 886px;
    min-height: 200px;
    background-color: ${props => props.theme === 'dark' ? '#000' : '#e2e2e2'};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    transition: background-color .3s ease-out;
`
const Output = styled.textarea`
    display: inline-block;
    font-family: Courier, monospace;
    margin: 20px;
    background-color: ${props => props.theme === 'dark' ? '#2d2d2d' : '#fff'};
    padding: 10px;
    height: 160px;
    width: 100%;
    resize: none;
    border: none;
    border-radius: 4px;
    color: ${props => props.theme === 'dark' ? '#f5f5f5' : '#000'};
    &:focus {
        border: none;
        outline: none;
    }
    transition: .3s ease-out;
`

export {
    Monitor,
    Output
}