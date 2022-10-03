import { Component } from 'react';
import styled from 'styled-components';
import CheckBox from '../common/CheckBox';
import { Container, Typography } from '../common/styledComponents';
import { TypographyRoboto } from './../common/styledComponents';
import Image from './../common/Image';

const ButtonCount = styled('button')`
  background-color: white;
  border-width: 1px;
  width: 24px;
  height: 24px;
  font-size: 20px;
  cursor: pointer;
`;

const Stack = styled('div')`
  display: inline-flex;
`;
class CartModal extends Component {
  render() {
    if (!this.props.data) return null;
    return (
      <Container margin="20px 0" flexDirection="column">
        {this.props.data.map((item, i) => {
          return (
            <Container key={`${item.brand}-${i}`} margin="1rem 0">
              <Container width="136px" flexDirection="column">
                <Typography fw="300" lh="25px" mr="4px 0">
                  {item.brand}
                </Typography>
                <Typography fw="300" lh="25px" mr="4px 0">
                  {item.name}
                </Typography>
                <Typography fw="500" lh="25px">
                  {item.prices[0].amount}$
                </Typography>

                {item.attributes.map((attr) => {
                  return (
                    <div style={{ fontSize: '14px', fontWeight: '500' }} key={attr.name}>
                      <TypographyRoboto fs="14px" fw="500" lh="16px" mr="4px 0">
                        {attr.name}
                      </TypographyRoboto>
                      <Stack>
                        {attr.items.map((el) => {
                          return (
                            <CheckBox
                              small
                              key={el.value}
                              id={el.id}
                              value={el.value}
                              type={attr.type}
                              nameGroup={attr.id}
                            />
                          );
                        })}
                      </Stack>
                    </div>
                  );
                })}
              </Container>
              <Container flexDirection="column" alignItems="center">
                <ButtonCount onClick={() => this.props.handlerCount('+')}>+</ButtonCount>
                <Typography fs="16px" fw="500" lh="25px">
                  {this.props.count}
                </Typography>
                <ButtonCount onClick={() => this.props.handlerCount('-')}>-</ButtonCount>
              </Container>
              <Image src={item.gallery[0]} alt="item" width="120px" height="190px" />
            </Container>
          );
        })}
      </Container>
    );
  }
}
export default CartModal;
