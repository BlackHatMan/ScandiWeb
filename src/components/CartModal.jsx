import { Component } from 'react';
import styled from 'styled-components';
import CheckBox from '../common/CheckBox';
import { Container, Typography } from '../common/styledComponents';

const ButtonCount = styled('button')`
  background-color: white;
  border-width: 1px;
  width: 24px;
  height: 24px;
  font-size: 20px;
  cursor: pointer;
`;
class Cart extends Component {
  render() {
    return (
      <Container margin="20px 0">
        <Container width="136px" flexDirection="column">
          <Typography fw="300" lh="25px" mr="4px 0">
            Apollo Running Short
          </Typography>
          <Typography fw="500" lh="25px">
            50$
          </Typography>
          <Typography fs="14px" fw="500" lh="16px" mr="4px 0">
            Size:
          </Typography>
          <div>
            {this.props.sizeStock.map((el, i) => {
              return (
                <CheckBox
                  key={el}
                  id={i}
                  text={el}
                  nameGroup="size"
                  size="24px"
                  border="solid 1px #1d1f22"
                  colorChecked="white"
                  bgColorChecked="black"
                />
              );
            })}
          </div>
          <Typography fs="14px" fw="400" lh="16px" mr="4px 0">
            Color:
          </Typography>
          <div>
            {this.props.colorStock.map((el, i) => (
              <CheckBox
                key={el}
                id={i}
                nameGroup="color"
                size="16px"
                bgColor={el}
                border="1px solid white"
                outline="solid 1px #5ECE7B"
              />
            ))}
          </div>
        </Container>
        <Container flexDirection="column" alignItems="center">
          <ButtonCount onClick={() => this.props.handlerCount('+')}>+</ButtonCount>
          <Typography fs="16px" fw="500" lh="25px">
            {this.props.count}
          </Typography>
          <ButtonCount onClick={() => this.props.handlerCount('-')}>-</ButtonCount>
        </Container>
        <img src="./product.jpg" alt="item" width="120px" height="190px" />
      </Container>
    );
  }
}
export default Cart;
