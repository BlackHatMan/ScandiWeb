import { Component } from 'react';
import styled from 'styled-components';
import Image from '../common/Image';
import { Container, Typography } from '../common/styledComponents';
import CheckBox from './../common/CheckBox';

const sizeStock = ['XS', 'S', 'M', 'L'];
const colorStock = ['grey', 'yellow', 'red', 'lightgreen', 'blue'];

const TypographyRoboto = styled(Typography)`
  font-family: 'Roboto Condensed';
`;
const Wrapper = styled('div')`
  margin: ${(props) => props.mr};
  ${(props) => props};
`;
const Button = styled('button')`
  width: 100%;
  padding: 16px 32px;
  font: 600 16px/120% 'Raleway', sans-serif;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor || 'transparent'};
  border: ${(props) => props.border || '1px solid'};
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;

class PDP extends Component {
  render() {
    return (
      <Container>
        <Image src="./Product_D.jpg" width="610px" height="510px" />
        <Wrapper width="300px">
          <div>
            <Typography fs="30px" fw="600" lh="27px">
              Apollo
            </Typography>
            <Typography fs="30px" fw="400" lh="27px" mr="16px 0">
              Running Short
            </Typography>
          </div>
          <Wrapper mr="24px 0">
            <TypographyRoboto fs="18px" fw="700" mr="10px 0">
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
                    size="45px"
                    width="65px"
                    border="solid 1px #1d1f22"
                    colorChecked="white"
                    bgColorChecked="black"
                    font-size="16px"
                  />
                );
              })}
            </div>
          </Wrapper>
          <Wrapper mr="24px 0">
            <TypographyRoboto fs="18px" fw="700" mr="5px 0">
              Color:
            </TypographyRoboto>
            <div>
              {colorStock.map((el, i) => (
                <CheckBox
                  key={el}
                  id={i}
                  nameGroup="color"
                  size="32px"
                  bgColor={el}
                  border="1px solid white"
                  outline="solid 1px #5ECE7B"
                />
              ))}
            </div>
          </Wrapper>
          <Wrapper mr="12px 0 20px 0">
            <TypographyRoboto fs="18px" fw="700" mr="10px 0">
              Price:
            </TypographyRoboto>
            <Typography fs="24px" fw="700">
              $50.00
            </Typography>
          </Wrapper>
          <Button color="white" bgColor="#5ECE7B" border="1px solid #5ECE7B">
            ADD TO CART
          </Button>
          <Typography fs="16px" lh="26px" mr="40px 0 0 0">
            Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic
            cocktail dresses and party dresses from all your favorite brands.
          </Typography>
        </Wrapper>
      </Container>
    );
  }
}

export default PDP;
