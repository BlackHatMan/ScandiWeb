import React, { Component } from 'react';
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
  padding: 1rem;
  font-family: Source Sans Pro;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  border: ${(props) => props.border};
  background-color: ${(props) => props.bgColor};
  line-height: ${(props) => props.height};
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

class CheckBox extends Component {
  render() {
    let {
      id,
      value,
      type,
      nameGroup,
      border,
      bgColor,
      bgColorChecked,
      colorChecked,
      outline,
      required,
      ...rest
    } = this.props;

    if (type === 'swatch') {
      bgColor = value;
      bgColorChecked = value;
      border = '2px solid white';
      outline = `2px solid ${value}`;
      value = '';
    }

    return (
      <CheckBoxContainer>
        <HiddenCheckBox id={`${nameGroup}-${id}`} name={nameGroup} required={required} />
        <Label
          htmlFor={`${nameGroup}-${id}`}
          border={border}
          bgColor={bgColor}
          colorChecked={colorChecked}
          bgColorChecked={bgColorChecked}
          outline={outline}
          rest={rest}
          title={value}
        >
          {value}
        </Label>
      </CheckBoxContainer>
    );
  }
}

export default CheckBox;
