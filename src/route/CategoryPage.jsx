import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Typography } from '../common/styledComponents';
import { addItem } from '../data/slice';
import { getCategory } from '../hok/hoks';
import CartLogo from '../svg/Card_item.svg';
import { Image } from '../common/Image';

const WrapperPage = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 40px;
  overflow: auto;
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

class CategoryPage extends PureComponent {
  addToCart = (e, item) => {
    e.preventDefault();

    const attributes = item.attributes.map((el) => {
      return {
        ...el,
        items: [el.items[0]],
      };
    });

    this.props.addItem({
      id: item.id,
      attributes,
      brand: item.brand,
      gallery: item.gallery,
      name: item.name,
      prices: item.prices,
      count: 1,
    });
  };
  render() {
    return (
      <WrapperPage>
        {this.props.data.map((item, i) => {
          return (
            <WrapperCard key={i} color={item.inStock ? '' : '#8D8F9A'}>
              <Link to={item.inStock ? item.id : false}>
                <WrapperImage>
                  <Image src={item.gallery[0]} alt={item.name} width={350} height={340} />

                  {item.inStock ? (
                    <Logo src={CartLogo} onClick={(e) => this.addToCart(e, item)} alt="add item" />
                  ) : (
                    <StockTitle>OUT OF STOCK</StockTitle>
                  )}
                </WrapperImage>
              </Link>
              <div>
                <Typography fw="300" fs="16px" lh="29px" m="24px 0 0 0">
                  {item.name}
                </Typography>
                <Typography fw="500" fs="16px" lh="29px">
                  {item.prices[this.props.selectedCurrency].amount}
                  {item.prices[this.props.selectedCurrency].currency.symbol}
                </Typography>
              </div>
            </WrapperCard>
          );
        })}
      </WrapperPage>
    );
  }
}
const mapStateToProps = (state) => ({ selectedCurrency: state.indexSelectedCurrency });
export default connect(mapStateToProps, { addItem })(getCategory(CategoryPage));
