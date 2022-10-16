import { Component } from 'react';
import styled from 'styled-components';
import { Typography, TypographyRoboto, Button } from '../common/styledComponents';
import { Container } from '../common/styledComponents';
import { CheckBox } from '../common/CheckBox';

const sizeStock = ['XS', 'S', 'M', 'L'];
const colorStock = ['grey', 'yellow', 'red', 'lightgreen', 'blue'];

const WrapperItem = styled(Container)`
  border-bottom: solid 1px #e5e5e5;
  border-top: solid 1px #e5e5e5;
  border-collapse: collapse;
`;
const WrapperCost = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 200px;
  row-gap: 8px;
  margin: 30px 0 20px 0;
`;
const ButtonCount = styled('button')`
  background-color: white;
  border-width: 1px;
  cursor: pointer;
  width: 45px;
  height: 45px;
  font-size: 24px;
`;

class Cart extends Component {
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
      <div style={{ margin: '0 10px' }}>
        <Typography fw="700" fs="32px" lh="40px" m="60px 0">
          CART
        </Typography>
        <WrapperItem padding="24px 0">
          <Container width="300px" flexDirection="column">
            <Typography fs="30px" fw="600" lh="27px">
              Jupiter
            </Typography>
            <Typography fs="30px" fw="400" lh="27px" m="16px 0">
              Wayfarer
            </Typography>
            <Typography fs="24px" fw="700" lh="24px" m="6px 0">
              $50.00
            </Typography>
            <TypographyRoboto fs="18px" fw="700" lh="18px" m="20px 0 10px 0">
              Size:
            </TypographyRoboto>
            <div>
              {sizeStock.map((el, i) => {
                return (
                  <CheckBox
                    key={el}
                    id={i}
                    text={el}
                    nameGroup="size-cart"
                    height="45px"
                    width="63px"
                    border="solid 1px #1d1f22"
                    colorChecked="white"
                    bgColorChecked="black"
                    font-size="16px"
                  />
                );
              })}
            </div>
            <TypographyRoboto fs="18px" fw="700" lh="18px" m="20px 0 10px 0">
              Color:
            </TypographyRoboto>
            <div>
              {colorStock.map((el, i) => (
                <CheckBox
                  key={el}
                  id={i}
                  nameGroup="color-cart"
                  width="32px"
                  height="32px"
                  bgColor={el}
                  border="2px solid white"
                  outline="solid 2px #5ECE7B"
                />
              ))}
            </div>
          </Container>
          <Container>
            <Container flexDirection="column" alignItems="center" margin="0 24px">
              <ButtonCount onClick={() => this.handlerCount('+')}>+</ButtonCount>
              <Typography fs="24px" fw="500" lh="25px">
                {this.state.count}
              </Typography>
              <ButtonCount onClick={() => this.handlerCount('-')}>-</ButtonCount>
            </Container>
            <img src="./product.jpg" alt="item" width="200px" height="290px" />
          </Container>
        </WrapperItem>
        <div style={{ maxWidth: '280px' }}>
          <WrapperCost>
            <Typography fs="24px" fw="400" lh="28px">
              Tax 21%:
            </Typography>
            <Typography fs="24px" fw="700" lh="28px">
              $42.00
            </Typography>

            <Typography fs="24px" fw="400" lh="28px">
              Quantity
            </Typography>
            <Typography fs="24px" fw="700" lh="28px">
              3
            </Typography>

            <Typography fs="24px" fw="400" lh="28px">
              Total:
            </Typography>
            <Typography fs="24px" fw="700" lh="28px">
              $200.00
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

export default Cart;
