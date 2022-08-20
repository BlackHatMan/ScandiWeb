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
  color: black;
  font-size: 14px;
  font-family: Source Sans Pro;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  background-color: ${(props) => props.bgColor};
  ${(props) => props.rest};
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
  width,
  height,
  border,
  bgColor,
  bgColorChecked,
  colorChecked,
  outline,
  ...rest
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
        width={width}
        height={height}
        border={border}
        bgColor={bgColor}
        colorChecked={colorChecked}
        bgColorChecked={bgColorChecked}
        outline={outline}
        rest={rest}
      >
        {text}
      </Label>
    </CheckBoxContainer>
  );
};
export default CheckBox;
