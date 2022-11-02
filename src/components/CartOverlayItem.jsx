import { PureComponent } from 'react';
import styled from 'styled-components';
import { CheckBox } from '../common/CheckBox';
import { Container, Typography } from '../common/styledComponents';
import { Image } from '../common/Image';

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

class CartOverlayItem extends PureComponent {
  render() {
    const { items, indexSelectedCurrency } = this.props;
    return (
      <Container margin="20px 0" flexDirection="column">
        {items.map((item, i) => {
          return (
            <Container key={item.brand + i} margin="15px 0">
              <Container width="136px" flexDirection="column">
                <Typography fw="300" lh="25px" m="4px 0">
                  {item.brand}
                </Typography>
                <Typography fw="300" lh="25px" m="4px 0">
                  {item.name}
                </Typography>
                <Typography fw="500" lh="25px">
                  {item.prices[indexSelectedCurrency].amount}
                  {item.prices[indexSelectedCurrency].currency.symbol}
                </Typography>

                {item.attributes.map((attr) => {
                  return (
                    <div style={{ fontSize: '14px', fontWeight: '500' }} key={attr.id}>
                      <Typography roboto fs="14px" fw="500" lh="16px" m="4px 0">
                        {attr.name}
                      </Typography>
                      <Stack>
                        <CheckBox
                          small
                          value={attr.items[0].value}
                          type={attr.type}
                          nameGroup={attr.name + item.id}
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
              <Image src={item.gallery[0]} alt={item.name} width={120} height={180} />
            </Container>
          );
        })}
      </Container>
    );
  }
}
export default CartOverlayItem;
