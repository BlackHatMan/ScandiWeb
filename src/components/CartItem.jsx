import { Component } from 'react';
import styled from 'styled-components';
import { Typography, TypographyRoboto } from '../common/styledComponents';
import { Container } from './../common/styledComponents';
import { CheckBox } from '../common/CheckBox';

const Stack = styled('div')`
  display: inline-flex;
`;

const ButtonCount = styled('button')`
  background-color: white;
  border-width: 1px;
  cursor: pointer;
  width: 45px;
  height: 45px;
  font-size: 24px;
`;
const WrapperItem = styled(Container)`
  border-bottom: solid 1px #e5e5e5;
  border-top: solid 1px #e5e5e5;
  border-collapse: collapse;
`;

class CartItem extends Component {
  render() {
    return (
      <>
        {this.props.item.map((el) => {
          return (
            <WrapperItem key={el.id} padding="24px 0">
              <Container width="100%">
                <Container width="300px" flexDirection="column">
                  <Typography fs="30px" fw="600" lh="27px">
                    {el.name}
                  </Typography>
                  <Typography fs="30px" fw="400" lh="27px" m="16px 0">
                    {el.brand}
                  </Typography>
                  <Typography fs="24px" fw="700" lh="24px" m="6px 0">
                    ${el.prices[0].amount}
                  </Typography>
                  <div>
                    {el.attributes.map((attr) => {
                      return (
                        <div style={{ fontSize: '14px', fontWeight: '500' }} key={attr.id}>
                          <TypographyRoboto fs="18px" fw="700" lh="18px" m="20px 0 10px 0">
                            {attr.name}
                          </TypographyRoboto>
                          <Stack>
                            <CheckBox
                              value={attr.items[0].value}
                              type={attr.type}
                              nameGroup={attr.name + el.id}
                              defaultChecked={true}
                            />
                          </Stack>
                        </div>
                      );
                    })}
                  </div>
                </Container>
                <Container>
                  <Container flexDirection="column" alignItems="center" margin="0 24px">
                    <ButtonCount onClick={() => this.props.increaseCount(el.id)}>+</ButtonCount>
                    <Typography fs="24px" fw="500" lh="25px">
                      {el.count}
                    </Typography>
                    <ButtonCount onClick={() => this.props.decreaseCount(el.id)}>-</ButtonCount>
                  </Container>
                  <img src={el.gallery[0]} alt="item" width="200px" height="290px" />
                </Container>
              </Container>
            </WrapperItem>
          );
        })}
      </>
    );
  }
}

export default CartItem;
