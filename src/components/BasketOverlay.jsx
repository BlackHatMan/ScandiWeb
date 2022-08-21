import { Component } from 'react';
import styled from 'styled-components';
import { Container, Typography, Button } from '../common/styledComponents';
import CartModal from './CartModal';

const sizeStock = ['XS', 'S', 'M', 'L'];
const colorStock = ['grey', 'yellow', 'red', 'lightgreen', 'blue'];

const ContainerOverlay = styled(Container)`
  width: 325px;
  max-height: 800px;
  padding: 32px 16px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

class BasketOverlay extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  handlerCount = (arg) => {
    if (arg === '-' && this.state.count > 0) this.setState({ count: this.state.count - 1 });
    if (arg === '+') this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <ContainerOverlay>
        <Typography fw="700" lh="25px" mr="4px 0">
          My Bag {this.state.count} items
        </Typography>
        <CartModal
          sizeStock={sizeStock}
          colorStock={colorStock}
          handlerCount={this.handlerCount}
          count={this.state.count}
        />
        <Container margin="0 0 30px 0">
          <Typography fw="700">Total</Typography>
          <Typography fw="700">$200</Typography>
        </Container>
        <Container>
          <Button width="140px" height="40px" fw="700" color="black" bgColor="transparent">
            View bag
          </Button>
          <Button width="140px" height="40px" fw="700" border="1px solid #5ECE7B">
            CHECK OUT
          </Button>
        </Container>
      </ContainerOverlay>
    );
  }
}
export default BasketOverlay;
