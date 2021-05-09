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
const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 22px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
const ConfigButtonsContainer = styled.div`
    padding: 20px;
    width: 846px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Label = styled.div`
    margin-right: 10px;
    font-weight: 500;
`

export {
    Monitor,
    Output,
    CheckBox,
    CheckBoxLabel,
    CheckBoxWrapper,
    ConfigButtonsContainer,
    Label
}