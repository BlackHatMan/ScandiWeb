import { Component } from 'react';
import styled from 'styled-components';
import { CheckBox } from '../common/CheckBox';
import { Container, Typography } from '../common/styledComponents';
import { TypographyRoboto } from './../common/styledComponents';
import { Image } from './../common/Image';

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

                {item.attributes.map((attr, index) => {
                  /* parse type checkbox from redux which the added from ProductPAge */
                  const [value, type] = attr.at(1).split('-');
                  return (
                    <div style={{ fontSize: '14px', fontWeight: '500' }} key={attr.at(0)}>
                      <TypographyRoboto fs="14px" fw="500" lh="16px" mr="4px 0">
                        {attr.at(0)}
                      </TypographyRoboto>
                      <Stack>
                        <CheckBox
                          small
                          value={value}
                          type={type}
                          nameGroup={value + index}
                          defaultChecked={true}
                        />
                      </Stack>
                    </div>
                  );
                })}
              </Container>
              <Container flexDirection="column" alignItems="center">
                <ButtonCount onClick={() => this.props.increaseCount(item.id)}>+</ButtonCount>
                <Typography fs="16px" fw="500" lh="25px">
                  {item.count}
                </Typography>
                <ButtonCount onClick={() => this.props.decreaseCount(item.id)}>-</ButtonCount>
              </Container>
              <Image src={item.gallery.at(0)} alt={item.name} width={120} height={180} />
            </Container>
          );
        })}
      </Container>
    );
  }
}
export default CartModal;
