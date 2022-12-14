import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import { PureComponent } from 'react';
import { Typography, Button } from '../common/styledComponents';
import { increaseCount, decreaseCount } from '../data/slice';
import CartItem from '../components/CartItem';
import { RootState } from '../data/store';

const WrapperCost = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 200px;
  row-gap: 8px;
  column-gap: 5px;
  margin: 30px 0 20px 0;
`;

class CartPage extends PureComponent<PropsFromRedux> {
  render() {
    const { items, total, symbol, indexSelectedCurrency, decreaseCount, increaseCount } =
      this.props;
    return (
      <div style={{ margin: '0 10px' }}>
        <Typography fw="700" fs="32px" lh="40px" m="60px 0">
          CART
        </Typography>
        {items.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              decreaseCount={decreaseCount}
              increaseCount={increaseCount}
              indexSelectedCurrency={indexSelectedCurrency}
              symbol={symbol}
            />
          );
        })}

        <div style={{ maxWidth: '280px' }}>
          <WrapperCost>
            <Typography fs="24px" fw="400" lh="28px">
              Tax 21%:
            </Typography>
            <Typography fs="24px" fw="700" lh="28px">
              {symbol}
              {total.tax}
            </Typography>

            <Typography fs="24px" fw="400" lh="28px">
              Quantity
            </Typography>
            <Typography fs="24px" fw="700" lh="28px">
              {total.count}
            </Typography>

            <Typography fs="24px" fw="400" lh="28px">
              Total:
            </Typography>
            <Typography fs="24px" fw="700" lh="28px">
              {symbol}
              {total.cost}
            </Typography>
          </WrapperCost>
          <Button height="43px" fw="600">
            ORDER
          </Button>
        </div>
      </div>
    );
  }
}
const connector = connect((state: RootState) => state, { increaseCount, decreaseCount });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CartPage);
