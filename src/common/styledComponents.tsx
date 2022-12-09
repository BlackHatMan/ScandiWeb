import styled from 'styled-components';

export const Container = styled('div')<cssProps>`
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
  roboto?: boolean;
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

export const Button = styled('button')<cssProps>`
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
  :disabled {
    background-color: #cccccc;
    color: #666666;
  }
`;

interface cssProps {
  width?: string;
  height?: string;
  padding?: string;
  color?: string;
  margin?: string;
  alignItems?: string;
  flexDirection?: string;
  fs?: string;
  fw?: string;
}
