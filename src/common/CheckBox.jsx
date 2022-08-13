import React from 'react';
import styled from 'styled-components';

const HiddenCheckBox = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Label = styled.label`
  display: inline-block;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  font-size: 14px;
  font-family: Source Sans Pro;
  line-height: 22px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  border: ${(props) => props.border};
  background-color: ${(props) => props.bgColor};
  color: black;
  ${HiddenCheckBox}:checked + && {
    color: ${(props) => props.colorChecked};
    background-color: ${(props) => props.bgColorChecked};
    outline: ${(props) => props.outline};
  }
`;

const CheckBoxContainer = styled('div')`
  display: inline-block;
  margin-right: 8px;
  position: relative;
`;

const CheckBox = ({
  text,
  id,
  nameGroup,
  size,
  border,
  bgColor,
  bgColorChecked,
  colorChecked,
  outline,
}) => {
  const handler = (t) => {
    console.log(t);
  };
  return (
    <CheckBoxContainer>
      <HiddenCheckBox id={`${nameGroup}-${id}`} name={nameGroup} />
      <Label
        htmlFor={`${nameGroup}-${id}`}
        onClick={() => handler(text)}
        size={size}
        border={border}
        bgColor={bgColor}
        colorChecked={colorChecked}
        bgColorChecked={bgColorChecked}
        outline={outline}
      >
        {text}
      </Label>
    </CheckBoxContainer>
  );
};
export default CheckBox;
