import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const Typography = styled('p')`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  line-height: ${(props) => props.lh};
  margin: ${(props) => props.mr};
  ${(props) => props.css};
`;

export const TypographyRoboto = styled(Typography)`
  font-family: 'Roboto Condensed';
`;

export const Button = styled('button')`
  width: 100%;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  transition: all 0.3s;
  max-width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fs || '14px'};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bgColor || '#5ECE7B'};
  border: ${(props) => props.border || '1px solid'};
  &:hover {
    background-color: forestgreen;
  }
`;
