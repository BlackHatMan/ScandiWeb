import { CSSProperties } from 'react';
import styled from 'styled-components';

export const Container = styled('div')<CSSProperties>`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const Typography = styled('p')<{
  fs?: string;
  fw?: string;
  lh?: string;
  m?: string;
  roboto?: string;
}>`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  line-height: ${(props) => props.lh};
  margin: ${(props) => props.m};
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => {
    return props.roboto ? props.theme.fonts.roboto : props.theme.fonts.raleway;
  }};
`;

export const Button = styled('button')<
  CSSProperties & {
    fs: string;
    fw: string;
  }
>`
  width: 100%;
  font-family: ${(props) => props.theme.fonts.raleway};
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  max-width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fs || '14px'};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.theme.color.green};
  &:hover {
    background-color: forestgreen;
  }
`;
