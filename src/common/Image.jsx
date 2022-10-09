import styled from 'styled-components';

const Img = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: ${(props) => props.cursor};
  max-width: ${(props) => props.width + 'px'};
  max-height: ${(props) => props.height + 'px'};
`;

export const Image = (props) => {
  const { src, width, height, alt, cursor, ...attr } = props;
  if (!src) {
    return <Img src={`https://via.placeholder.com/${width}x${height}?text=${alt}`} />;
  }
  return (
    <Img
      src={src}
      width={width}
      height={height}
      loading="lazy"
      alt={alt}
      {...attr}
      cursor={cursor}
    />
  );
};
