import styled from 'styled-components';

const Img = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Wrapper = styled('div')`
  overflow: hidden;
  max-height: ${(props) => props.maxHeight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
const Image = (props) => {
  return (
    <Wrapper
      width={props.width}
      height={props.height}
      maxWidth={props.maxWidth}
      maxHeight={props.maxHeight}
    >
      <Img src={props.src} loading="lazy" alt={props.alt} />
    </Wrapper>
  );
};

export default Image;
