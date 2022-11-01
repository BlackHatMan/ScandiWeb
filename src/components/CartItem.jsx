import { Component } from 'react';
import styled from 'styled-components';
import { Typography, TypographyRoboto } from '../common/styledComponents';
import { Container } from './../common/styledComponents';
import { CheckBox } from '../common/CheckBox';
import { Image } from '../common/Image';

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
const Wrapper = styled(Container)`
  border-bottom: solid 1px #e5e5e5;
  border-top: solid 1px #e5e5e5;
  border-collapse: collapse;
  padding: 24px 0;
`;
const WrapperImage = styled('div')`
  position: relative;
`;
const BtnRight = styled('button')`
  cursor: pointer;
  position: relative;
  width: 24px;
  height: 24px;
  border: none;
  background: rgba(0, 0, 0, 0.73);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:: after {
    position: absolute;
    content: '';
    width: 9px;
    height: 9px;
    left: 5px;
    top: 6px;
    border-top: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(45deg);
  }
`;
const BtnLeft = styled('button')`
  cursor: pointer;
  position: relative;
  width: 24px;
  height: 24px;
  border: none;
  background: rgba(0, 0, 0, 0.73);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:: after {
    position: absolute;
    content: '';
    width: 9px;
    height: 9px;
    left: 8px;
    top: 6px;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    transform: rotate(45deg);
  }
`;

const WrapperButtons = styled('div')`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 56px;
  right: 16px;
  bottom: 16px;
`;
class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      imageNumber: 0,
    };
  }

  imageHandlerLeft = () => {
    if (this.state.imageNumber > 0) {
      this.setState((state) => ({ imageNumber: state.imageNumber - 1 }));
    }
  };

  imageHandlerRight = () => {
    if (this.props.item.gallery.length - 1 > this.state.imageNumber) {
      this.setState((state) => ({ imageNumber: state.imageNumber + 1 }));
    }
  };

  render() {
    const { item, indexSelectedCurrency, symbol } = this.props;
    return (
      <Wrapper>
        <Container width="100%">
          <Container width="300px" flexDirection="column">
            <Typography fs="30px" fw="600" lh="27px">
              {item.name}
            </Typography>
            <Typography fs="30px" fw="400" lh="27px" m="16px 0">
              {item.brand}
            </Typography>
            <Typography fs="24px" fw="700" lh="24px" m="6px 0">
              {symbol}
              {item.prices[indexSelectedCurrency].amount}
            </Typography>
            <div>
              {item.attributes.map((attr) => {
                return (
                  <div style={{ fontSize: '14px', fontWeight: '500' }} key={attr.id}>
                    <TypographyRoboto fs="18px" fw="700" lh="18px" m="20px 0 10px 0">
                      {attr.name}
                    </TypographyRoboto>
                    <Stack>
                      <CheckBox
                        value={attr.items[0].value}
                        type={attr.type}
                        nameGroup={attr.name + item.id}
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
              <ButtonCount onClick={() => this.props.increaseCount(item.id)}>+</ButtonCount>
              <Typography fs="24px" fw="500" lh="25px">
                {item.count}
              </Typography>
              <ButtonCount onClick={() => this.props.decreaseCount(item.id)}>-</ButtonCount>
            </Container>
            <WrapperImage>
              <Image
                src={item.gallery[this.state.imageNumber]}
                alt="item"
                width={200}
                height={290}
              />
              <WrapperButtons>
                <BtnLeft onClick={this.imageHandlerLeft} />
                <BtnRight onClick={this.imageHandlerRight} />
              </WrapperButtons>
            </WrapperImage>
          </Container>
        </Container>
      </Wrapper>
    );
  }
}

export default CartItem;
