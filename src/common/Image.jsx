import styled from 'styled-components';

const Img = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: fill;
  cursor: ${(props) => props.cursor};
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
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
