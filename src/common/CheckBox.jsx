import React, { Component } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

const CheckBoxContainer = styled('div')`
  display: inline-block;
  margin-right: 0.5rem;
  position: relative;
`;

const HiddenCheckBox = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Color = styled('label')`
  display: inline-block;
  cursor: pointer;
  border: 2px solid white;
  width: ${(props) => props.width || '2rem'};
  height: ${(props) => props.height || '2rem'};
  background-color: ${(props) => props.value};
  ${(props) =>
    props.small &&
    css`
      width: ${(props) => props.width || '1rem'};
      height: ${(props) => props.height || '1rem'};
    `}
  ${HiddenCheckBox}:checked + && {
    outline: ${(props) => `2px solid ${props.value}`};
  }
`;

const Text = styled('label')`
  display: inline-block;
  text-transform: uppercase;
  padding: 0.7rem;
  text-align: center;
  cursor: pointer;
  border: solid 1px #1d1f22;
  font-family: Source Sans Pro, sans-serif;
  width: ${(props) => props.width || '4rem'};
  height: ${(props) => props.height || '3rem'};
  ${(props) =>
    props.small &&
    css`
      padding: 0.2rem;
      width: ${(props) => props.width || '100%'};
      height: ${(props) => props.height || '1.5rem'};
    `}
  ${HiddenCheckBox}:checked + && {
    color: white;
    background-color: black;
  }
`;

class CheckBox extends Component {
  render() {
    const { id, value, type, nameGroup, required, ...rest } = this.props;
    const ID = `${nameGroup}-${id}`;

    return (
      <CheckBoxContainer>
        <HiddenCheckBox id={ID} name={nameGroup} required={required} />
        {type === 'text' && (
          <Text htmlFor={ID} {...rest}>
            {value}
          </Text>
        )}
        {type === 'swatch' && <Color htmlFor={ID} value={value} {...rest} />}
      </CheckBoxContainer>
    );
  }
}

export default CheckBox;
