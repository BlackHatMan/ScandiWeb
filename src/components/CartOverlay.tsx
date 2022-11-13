import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import { Container, Typography, Button } from '../common/styledComponents';
import { increaseCount, decreaseCount } from '../data/slice';
import CartOverlayItem from './CartOverlayItem';
import { RootState } from '../data/store';

const Overlay = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const BackgroundOverlay = styled('div')`
  position: fixed;
  margin-top: 80px;
  z-index: 100;
  left: 0;
  top: 0;
  background: rgba(55, 57, 72, 0.22);
  height: 100%;
  width: 100%;
`;

const BasketContainer = styled(Container)`
  position: absolute;
  top: 0;
  right: 70px;
  width: 345px;
  max-height: calc(100vh - 80px);
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  overflow: auto;
`;

const StyledLink = styled(Link)`
  width: 140px;
  text-decoration: none;
`;

class CartOverlay extends Component<CartOverlayProps> {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }
  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }
  render() {
    const { items, indexSelectedCurrency, total, close, symbol } = this.props;
    return (
      <Overlay onClick={close}>
        <BackgroundOverlay>
          <BasketContainer onClick={(e) => e.stopPropagation()}>
            <Typography fw="700" lh="25px" m="4px 0">
              My Bag {total.count} items
            </Typography>
            <CartOverlayItem
              items={items}
              increaseCount={this.props.increaseCount}
              decreaseCount={this.props.decreaseCount}
              indexSelectedCurrency={indexSelectedCurrency}
            />
            <Container margin="0 0 30px 0">
              <Typography fw="700">Total</Typography>
              <Typography fw="700">
                {symbol}
                {total.cost}
              </Typography>
            </Container>
            <Container>
              <StyledLink to="/cart" onClick={close}>
                <Button width="140px" height="40px" fw="700" color="black">
                  View bag
                </Button>
              </StyledLink>
              <StyledLink to="/all" onClick={close}>
                <Button width="140px" height="40px" fw="700">
                  CHECK OUT
                </Button>
              </StyledLink>
            </Container>
          </BasketContainer>
        </BackgroundOverlay>
      </Overlay>
    );
  }
}
const connector = connect((state: RootState) => state, { increaseCount, decreaseCount });
type PropsFromRedux = ConnectedProps<typeof connector>;

interface CartOverlayProps extends PropsFromRedux {
  close: () => void;
}
export type CartOverlayItemProps = Omit<
  CartOverlayProps,
  'symbol' | 'total' | 'close' | '_persist'
>;
export default connector(CartOverlay);
