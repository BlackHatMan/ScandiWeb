import { Component, Fragment } from 'react';
import styled from 'styled-components';
import Image from '../common/Image';
import { Container, Typography, TypographyRoboto, Button } from '../common/styledComponents';
import CheckBox from '../common/CheckBox';
import { getProduct } from '../hok/getCategory';

const Wrapper = styled('div')`
  margin: ${(props) => props.mr};
  width: ${(props) => props.width};
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

class ProductPage extends Component {
  render() {
    const data = this.props?.data?.product;
    console.log('render ~ props', this.props);
    return (
      <Container>
        <Container>
          <ImageContainer>
            {data?.gallery.map((el, i) => {
              return <Img key={`${el}+${i}`} src={el} onClick={() => this.handlerPath(el)} />;
            })}
          </ImageContainer>
          <Image src={data?.gallery[0]} width="610px" height="510px" />
        </Container>
        <Wrapper width="292px">
          <div>
            <Typography fs="30px" fw="600" lh="27px">
              {data?.brand}
            </Typography>
            <Typography fs="30px" fw="400" lh="27px" mr="16px 0">
              {data?.name}
            </Typography>
          </div>
          <Wrapper mr="24px 0">
            {data?.attributes.map((attr) => {
              return (
                <div>
                  <TypographyRoboto fs="18px" fw="700" mr="10px 0">
                    {attr.id}
                  </TypographyRoboto>
                  {attr.items.map((el) => {
                    return (
                      <CheckBox
                        key={el.value}
                        id={el.id}
                        value={el.value}
                        type={attr.type}
                        nameGroup={attr.id}
                        border="solid 1px #1d1f22"
                        colorChecked="white"
                        bgColorChecked="black"
                      />
                    );
                  })}
                </div>
              );
            })}
          </Wrapper>
          <Wrapper mr="12px 0 20px 0">
            <TypographyRoboto fs="18px" fw="700" mr="10px 0">
              Price:
            </TypographyRoboto>
            <Typography fs="24px" fw="700">
              {data?.prices[0].amount}$
            </Typography>
          </Wrapper>
          <Button height="52px" color="white" border="1px solid #5ECE7B">
            ADD TO CART
          </Button>
          <TypographyRoboto fs="16px" lh="26px" mr="40px 0 0 0">
            <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
          </TypographyRoboto>
        </Wrapper>
      </Container>
    );
  }
}

export default getProduct(ProductPage);
