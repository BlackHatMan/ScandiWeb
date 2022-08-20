import { Component } from 'react';
import styled from 'styled-components';
import Image from '../common/Image';
import { Container, Typography, TypographyRoboto } from '../common/styledComponents';
import CheckBox from './../common/CheckBox';

const sizeStock = ['XS', 'S', 'M', 'L'];
const colorStock = ['grey', 'yellow', 'red', 'lightgreen', 'blue'];
const pathImage = ['./Product_D.jpg', './Product_D.jpg', './Product_D.jpg', './Product_D.jpg'];

const Wrapper = styled('div')`
  margin: ${(props) => props.mr};
  width: ${(props) => props.width};
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
const ImageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  overflow-y: auto;
  max-height: 600px;
  margin-right: 30px;
`;

const Img = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  max-width: 80px;
  max-height: 80px;
`;

class PDP extends Component {
  constructor() {
    super();
    this.state = {
      path: './Product_D.jpg',
    };
  }
  handlerPath = (path) => {
    this.setState({ path });
  };
  render() {
    return (
      <Container>
        <Container>
          <ImageContainer>
            {pathImage.map((el, i) => {
              return <Img key={`${el}+${i}`} src={el} onClick={() => this.handlerPath(el)} />;
            })}
          </ImageContainer>
          <Image src={this.state.path} width="610px" height="510px" />
        </Container>
        <Wrapper width="292px">
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
          <TypographyRoboto fs="16px" lh="26px" mr="40px 0 0 0">
            Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic
            cocktail dresses and party dresses from all your favorite brands.
          </TypographyRoboto>
        </Wrapper>
      </Container>
    );
  }
}

export default PDP;
