import { Component } from 'react';
import styled from 'styled-components';
import { Container, Typography } from './styledComponents';
import CartLogo from '../svg/Card_item.svg';

const ImageWrapper = styled('div')`
  max-width: 350px;
  height: 330px;
  width: 100%;
  position: relative;
`;
const Logo = styled('img')`
  cursor: pointer;
  position: absolute;
  bottom: -26px;
  right: 15px;
  opacity: 0;
  transition: opacity ease 0.3s;
`;

const Wrapper = styled(Container)`
  &:hover {
    transition: ease 0.3s background;
    background-color: #ffffff;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    ${Logo} {
      opacity: 1;
    }
  }
`;
const StockTitle = styled('span')`
  position: absolute;
  left: 25%;
  top: 45%;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  color: #8d8f9a;
`;
class ItemPreview extends Component {
  render() {
    return (
      <Wrapper padding="16px" flexDirection="column" width="386px">
        <ImageWrapper>
          <img src="./Product_B.jpg" alt="" />
          {false && <StockTitle>OUT OF STOCK</StockTitle>}
          <Logo src={CartLogo} alt="" />
        </ImageWrapper>
        <Typography fw="300" fs="16px" lh="29px" mr="24px 0 0 0">
          Apollo Running Short
        </Typography>
        <Typography fw="500" fs="16px" lh="29px">
          $50.00
        </Typography>
      </Wrapper>
    );
  }
}

export default ItemPreview;
