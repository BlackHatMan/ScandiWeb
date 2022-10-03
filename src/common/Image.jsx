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
  const { src, width, height, maxHeight, maxWidth, alt } = props;
  return (
    <Wrapper width={width} height={height} maxWidth={maxWidth} maxHeight={maxHeight}>
      <Img src={src} loading="lazy" alt={alt} />
    </Wrapper>
  );
};

export default Image;
