import { Component } from 'react';
import styled from 'styled-components';

const Img = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Wrapper = styled('div')`
  max-width: ${(props) => props.MaxWidth};
  max-height: ${(props) => props.MaxHeight};
`;
class Image extends Component {
  render() {
    return (
      <Wrapper width={this.props.width} height={this.props.height}>
        <Img src={this.props.src} loading="lazy" alt={this.props.alt} />
      </Wrapper>
    );
  }
}

export default Image;
