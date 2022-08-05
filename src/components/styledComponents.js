import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  margin: ${(props) => props.margin};
`;

export const Typography = styled('p')`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  line-height: ${(props) => props.lh};
  margin-top: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mr};
`;
