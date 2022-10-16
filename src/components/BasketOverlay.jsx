import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { increaseCount, decreaseCount } from '../data/slice';
import { Container, Typography, Button } from '../common/styledComponents';
import { getBasketProduct } from '../hok/hoks';
import BasketItem from './BasketItem';

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
  width: 345px; /* more than in figma because after 4 items  horizontal scroll appears*/
  max-height: calc(100vh - 80px);
  padding: 32px 16px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  overflow: auto;
`;

class BasketOverlay extends Component {
  render() {
    return (
      <Overlay onClick={this.props.close}>
        <BackgroundOverlay>
          <BasketContainer onClick={(e) => e.stopPropagation()}>
            <Typography fw="700" lh="25px" mr="4px 0">
              My Bag {this.props.total.count} items
            </Typography>
            <BasketItem
              data={this.props.data}
              increaseCount={this.props.increaseCount}
              decreaseCount={this.props.decreaseCount}
            />
            <Container margin="0 0 30px 0">
              <Typography fw="700">Total</Typography>
              <Typography fw="700">${this.props.total.cost}</Typography>
            </Container>
            <Container>
              <Button width="140px" height="40px" fw="700" color="black" bgColor="transparent">
                View bag
              </Button>
              <Button width="140px" height="40px" fw="700" border="1px solid #5ECE7B">
                CHECK OUT
              </Button>
            </Container>
          </BasketContainer>
        </BackgroundOverlay>
      </Overlay>
    );
  }
}
const mapStateToProps = (state) => ({ total: state.total });

export default connect(mapStateToProps, { increaseCount, decreaseCount })(
  getBasketProduct(BasketOverlay)
);
