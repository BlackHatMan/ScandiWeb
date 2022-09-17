import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Container, Typography, TypographyRoboto, Button } from '../common/styledComponents';
import Image from '../common/Image';
import CheckBox from '../common/CheckBox';
import { getProduct } from '../hok/getCategory';
import { addItem } from '../data/slice';

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
  max-height: 800px;
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
  constructor() {
    super();
    this.state = {
      path: this.props?.data?.gallery[0],
      isOrder: true,
    };
  }

  handlerPath(path) {
    this.setState({ path });
  }

  handlerIsOrder(data) {
    this.setState((prev) => {
      return {
        isOrder: !prev.isOrder,
      };
    });

    this.props.addItem({
      attributes: data.attributes,
      brand: data.brand,
      gallery: data.gallery,
      name: data.name,
      prices: data.prices,
    });
  }

  handler() {
    console.log('lll');
  }
  render() {
    const { gallery, brand, name, attributes, prices, description } = this.props.data.product;
    return (
      <Container margin="30px 0 0 0">
        <Container>
          <ImageContainer>
            {gallery.map((el, i) => {
              return <Img key={el} src={el} onClick={() => this.handlerPath(el)} />;
            })}
          </ImageContainer>
          <Image src={this.state.path || gallery[0]} width="610px" height="510px" />
        </Container>
        <Wrapper width="292px">
          <div>
            <Typography fs="30px" fw="600" lh="27px">
              {brand}
            </Typography>
            <Typography fs="30px" fw="400" lh="27px" mr="16px 0">
              {name}
            </Typography>
          </div>
          <Wrapper mr="24px 0">
            {attributes.map((attr) => {
              return (
                <div key={attr.id}>
                  <TypographyRoboto fs="18px" fw="700" mr="10px 0">
                    {attr.id}
                  </TypographyRoboto>
                  {attr.items.map((el) => {
                    return (
                      <CheckBox
                        onClick={this.handler}
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
              {prices[0].amount}$
            </Typography>
          </Wrapper>
          <Button
            /*  disabled={this.state.isOrder} */
            onClick={this.handlerIsOrder.bind(this, this.props.data.product)}
            height="52px"
            color="white"
            border="1px solid #5ECE7B"
          >
            ADD TO CART
          </Button>
          <TypographyRoboto fs="16px" lh="26px" mr="40px 0 0 0">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </TypographyRoboto>
        </Wrapper>
      </Container>
    );
  }
}

export default connect(null, { addItem })(getProduct(ProductPage));
