import { Component } from 'react';
import styled from 'styled-components';
import { Container, Typography } from './styledComponents';
import CartModal from './CartModal';

const ContainerOverlay = styled('div')`
  width: 325px;
  max-height: 800px;
  padding: 32px 16px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Button = styled('button')`
  width: 140px;
  height: 40px;
  font: 600 14px/17px 'Raleway', sans-serif;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor || 'transparent'};
  border: ${(props) => props.border || '1px solid'};
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;
const sizeStock = ['XS', 'S', 'M', 'L'];
const colorStock = ['grey', 'yellow', 'red', 'lightgreen', 'blue'];

class CardOverlay extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  handlerCount = (arg) => {
    if (arg === '-') {
      if (this.state.count === 0) return;
      this.setState({ count: this.state.count - 1 });
    }
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
          <Button>View bag</Button>
          <Button color="white" bgColor="#5ECE7B" border="1px solid #5ECE7B">
            CHECK OUT
          </Button>
        </Container>
      </ContainerOverlay>
    );
  }
}
export default CardOverlay;
