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
    border: ${(props) => props.borderChecked};
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
  borderChecked,
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
        borderChecked={borderChecked}
      >
        {text}
      </Label>
    </CheckBoxContainer>
  );
};
export default CheckBox;
