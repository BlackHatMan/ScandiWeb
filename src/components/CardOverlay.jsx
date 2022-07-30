import { Component } from 'react';
import styled from 'styled-components';
import CheckBox from './CheckBox';

const Typography = styled('p')`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  line-height: ${(props) => props.lh};
  margin-top: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mr};
`;

const CardInfo = styled('div')`
  max-width: 140px;
  width: 100%;
`;

const ContainerOverlay = styled('div')`
  width: 325px;
  padding: 10px;
`;
const CartContainer = styled('div')`
  display: flex;
`;
const CardCount = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const sizeStock = ['XS', 'S', 'M', 'L'];
const colorStock = ['grey', 'yellow', 'red', 'lightgreen', 'blue'];

class CardOverlay extends Component {
  render() {
    return (
      <ContainerOverlay>
        <Typography fs="16px" fw="700" lh="25px" mr="4px">
          My Bag 3 items
        </Typography>
        <CartContainer>
          <CardInfo>
            <Typography fs="16px" fw="300" lh="25px" mr="4px">
              Apollo Running Short
            </Typography>
            <Typography fs="16px" fw="500" lh="25px">
              50$
            </Typography>
            <Typography fs="14px" fw="500" lh="16px" mr="4px">
              Size:
            </Typography>
            <div>
              {sizeStock.map((el, i) => {
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
            <Typography fs="14px" fw="400" lh="16px" mr="4px">
              Color:
            </Typography>
            <div>
              {colorStock.map((el, i) => (
                <CheckBox
                  key={el}
                  id={i}
                  nameGroup="color"
                  size="16px"
                  bgColor={el}
                  borderChecked="solid 2px green"
                />
              ))}
            </div>
          </CardInfo>
          <CardCount>
            <button>+</button>
            <span>2</span>
            <button>-</button>
          </CardCount>
          <div className="card_img"></div>
        </CartContainer>
      </ContainerOverlay>
    );
  }
}
export default CardOverlay;
