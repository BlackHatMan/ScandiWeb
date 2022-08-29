import { Component } from 'react';
import styled from 'styled-components';
import { Container, Typography } from '../common/styledComponents';
import CartLogo from '../svg/Card_item.svg';
import Image from '../common/Image';

const ImageWrapper = styled('div')`
  max-width: 350px;
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
  color: ${(props) => props.color};
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
`;
const Products = styled(Container)`
  flex-wrap: wrap;
`;

class ProductPage extends Component {
  render() {
    const item = {
      name: 'Apollo Running Short',
      price: '$50.00',
      imageSrc: './Product_B.jpg',
      available: true,
    };
    const mock = new Array(6).fill('');
    return (
      <Products>
        {mock.map((e, i) => {
          return (
            <Wrapper
              key={i}
              padding="16px"
              flexDirection="column"
              width="386px"
              color={item.available ? '' : '#8D8F9A'}
            >
              <ImageWrapper>
                <Image src={item.imageSrc} alt="product" />

                {item.available ? (
                  <Logo src={CartLogo} alt="add item" />
                ) : (
                  <StockTitle>OUT OF STOCK</StockTitle>
                )}
              </ImageWrapper>
              <Typography fw="300" fs="16px" lh="29px" mr="24px 0 0 0">
                {item.name}
              </Typography>
              <Typography fw="500" fs="16px" lh="29px">
                {item.price}
              </Typography>
            </Wrapper>
          );
        })}
      </Products>
    );
  }
}

export default ProductPage;
