import React, { PureComponent } from 'react';
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

const Color = styled('label')<InputProps>`
  display: inline-block;
  cursor: pointer;
  border: 2px solid white;
  width: ${(props) => props.width || '2rem'};
  height: ${(props) => props.height || '2rem'};
  background-color: ${(props) => props.value};
  transition: 0.2s all linear;
  ${(props) =>
    props.small &&
    css<InputProps>`
      width: ${(props) => props.width || '1rem'};
      height: ${(props) => props.height || '1rem'};
    `}
  ${HiddenCheckBox}:checked + && {
    outline: ${(props) => `2px solid ${props.value}`};
  }
`;

const Text = styled('label')<InputProps>`
  display: inline-block;
  text-transform: uppercase;
  padding: 0.7rem;
  margin: 2px 0;
  text-align: center;
  cursor: pointer;
  transition: 0.2s all linear;
  border: solid 1px ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.fonts.source};
  width: ${(props) => props.width || '4rem'};
  height: ${(props) => props.height || '3rem'};
  ${(props) =>
    props.small &&
    css<InputProps>`
      padding: 0.2rem;
      width: ${(props) => props.width || '100%'};
      min-width: 1.5rem;
      height: ${(props) => props.height || '1.5rem'};
    `}
  ${HiddenCheckBox}:checked + && {
    color: white;
    background-color: ${(props) => props.theme.color.black};
  }
`;

export class CheckBox extends PureComponent<CheckboxProps> {
  render() {
    const { id, value, type, nameGroup, required, ...rest } = this.props;
    const ID = `${nameGroup}-${id}`;
    return (
      <CheckBoxContainer>
        <HiddenCheckBox id={ID} name={nameGroup} required={required} value={value} {...rest} />
        {type === 'text' && <Text htmlFor={ID}>{value}</Text>}
        {type === 'swatch' && <Color htmlFor={ID} value={value} />}
      </CheckBoxContainer>
    );
  }
}

interface CheckboxProps extends React.ImgHTMLAttributes<HTMLInputElement> {
  type: string;
  is: string;
  value: string;
  nameGroup: string;
  required?: boolean;
}

interface InputProps {
  width?: string;
  height?: string;
  value?: string;
  small?: boolean;
}
