import { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Typography } from '../common/styledComponents';
import { getCategory } from '../hok/getCategory';
import CartLogo from '../svg/Card_item.svg';
import { Image } from '../common/Image';

const WrapperPage = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const WrapperImage = styled('div')`
  max-width: 350px;
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

const WrapperCard = styled(Container)`
  width: 386px;
  min-width: 300px;
  max-height: 444px;
  flex-direction: column;
  padding: 16px;
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

class CategoryPage extends Component {
  render() {
    return (
      <WrapperPage>
        {this.props.data.map((item, i) => {
          return (
            <WrapperCard key={i} color={item.inStock ? '' : '#8D8F9A'}>
              <Link to={item.inStock ? item.id : false}>
                <WrapperImage>
                  <Image src={item.gallery.at(0)} alt={item.name} width={350} height={340} />

                  {item.inStock ? (
                    <Logo src={CartLogo} alt="add item" />
                  ) : (
                    <StockTitle>OUT OF STOCK</StockTitle>
                  )}
                </WrapperImage>
              </Link>
              <div>
                <Typography fw="300" fs="16px" lh="29px" mr="24px 0 0 0">
                  {item.name}
                </Typography>
                <Typography fw="500" fs="16px" lh="29px">
                  {item.prices[0].amount}
                  {item.prices[0].currency.symbol}
                </Typography>
              </div>
            </WrapperCard>
          );
        })}
      </WrapperPage>
    );
  }
}

export default getCategory(CategoryPage);
