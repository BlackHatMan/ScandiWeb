import { Component } from 'react';
import { Typography, TypographyRoboto } from '../common/styledComponents';
import { Container } from './../common/styledComponents';
import CheckBox from './../common/CheckBox';
import styled from 'styled-components';

const Button = styled('button')`
  background-color: white;
  border-width: 1px;
  width: 45px;
  height: 45px;
  font-size: 24px;
  cursor: pointer;
`;

const sizeStock = ['XS', 'S', 'M', 'L'];
const colorStock = ['grey', 'yellow', 'red', 'lightgreen', 'blue'];
const pathImage = ['./Product_D.jpg', './Product_D.jpg', './Product_D.jpg', './Product_D.jpg'];
const count = 1;
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
      <div>
        <Typography fw="700" fs="32px" lh="40px">
          Cart
        </Typography>
        <Container margin="20px 0">
          <Container width="300px" flexDirection="column">
            <Typography fs="30px" fw="600" lh="27px">
              Jupiter
            </Typography>
            <Typography fs="30px" fw="400" lh="27px" mr="16px 0">
              Wayfarer
            </Typography>
            <Typography fs="24px" fw="700" lh="24px" mr="6px 0">
              50$
            </Typography>
            <TypographyRoboto fs="18px" fw="700" lh="18px" mr="20px 0 10px 0">
              Size:
            </TypographyRoboto>
            <div>
              {sizeStock.map((el, i) => {
                return (
                  <CheckBox
                    key={el}
                    id={i}
                    text={el}
                    nameGroup="size"
                    width="63px"
                    height="45px"
                    line-height="45px"
                    border="solid 1px #1d1f22"
                    colorChecked="white"
                    bgColorChecked="black"
                  />
                );
              })}
            </div>
            <TypographyRoboto fs="18px" fw="700" lh="18px" mr="20px 0 10px 0">
              Color:
            </TypographyRoboto>
            <div>
              {colorStock.map((el, i) => (
                <CheckBox
                  key={el}
                  id={i}
                  nameGroup="color"
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
              <Button onClick={() => this.handlerCount('+')}>+</Button>
              <Typography fs="24px" fw="500" lh="25px">
                {count}
              </Typography>
              <Button onClick={() => this.handlerCount('-')}>-</Button>
            </Container>
            <img src="./product.jpg" alt="item" width="200px" height="290px" />
          </Container>
        </Container>
      </div>
    );
  }
}

export default Cart;
