import { BaseSyntheticEvent, PureComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Typography, Container } from '../common/styledComponents';
import { addItem } from '../data/slice';
import { withGetCategory } from '../HOC/HOCs';
import CartLogo from '../svg/Card_item.svg';
import { Image } from '../common/Image';
import { product } from '../types/types';
import { RootState } from '../data/store';

const WrapperPage = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 40px;
  overflow: auto;
  padding: 10px;
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

const WrapperCard = styled(Container)<{ inStock: boolean }>`
  width: 386px;
  min-width: 300px;
  max-height: 444px;
  flex-direction: column;
  padding: 16px;
  opacity: ${(props) => (props.inStock ? 1 : 0.5)};
  &:hover {
    transition: ease 0.3s background;
    box-shadow: 0px 0px 25px 4px rgb(168 172 176 / 19%);
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
const Title = styled('h1')`
  font-size: 42px;
  font-weight: 400;
  font-family: Raleway;
  margin: 60px 0 60px 10px;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.black};
`;
class CategoryPage extends PureComponent<propsCategory> {
  addToCart = (e: BaseSyntheticEvent<MouseEvent>, product: product) => {
    e.preventDefault();

    let valueSelectedAttributes = '';

    const attributes = product.attributes.map((el) => {
      return {
        ...el,
        items: el.items.map((attr, i) => {
          valueSelectedAttributes += '/' + attr.id;
          return {
            ...attr,
            checked: i === 0,
          };
        }),
      };
    });

    this.props.addItem({
      id: product.id + valueSelectedAttributes,
      attributes,
      brand: product.brand,
      gallery: product.gallery,
      name: product.name,
      prices: product.prices,
      count: 1,
    });
  };
  render() {
    const { products, param } = this.props;
    return (
      <>
        <Title>{param}</Title>
        <WrapperPage>
          {products.map((item, i) => {
            return (
              <WrapperCard key={i} inStock={item.inStock}>
                <Link to={item.id}>
                  <WrapperImage>
                    <Image src={item.gallery[0]} alt={item.name} width={350} height={340} />

                    {item.inStock ? (
                      <Logo
                        src={CartLogo}
                        onClick={(e) => this.addToCart(e, item)}
                        alt="add item"
                      />
                    ) : (
                      <StockTitle>OUT OF STOCK</StockTitle>
                    )}
                  </WrapperImage>
                </Link>
                <div>
                  <Typography fw="300" fs="16px" lh="29px" m="24px 0 0 0">
                    {item.brand} {item.name}
                  </Typography>
                  <Typography fw="500" fs="16px" lh="29px">
                    {item.prices[this.props.index].amount}
                    {item.prices[this.props.index].currency.symbol}
                  </Typography>
                </div>
              </WrapperCard>
            );
          })}
        </WrapperPage>
      </>
    );
  }
}
const mapStateToProps = (state: RootState) => ({ index: state.indexSelectedCurrency });

const connector = connect(mapStateToProps, { addItem });
type PropsFromRedux = ConnectedProps<typeof connector>;
export interface propsCategory extends PropsFromRedux {
  products: product[];
  param?: string;
}
export default connector(withGetCategory(CategoryPage));
