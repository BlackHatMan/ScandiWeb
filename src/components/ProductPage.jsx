import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Markup } from 'interweave';
import { Typography, TypographyRoboto, Button } from '../common/styledComponents';
import { Image } from '../common/Image';
import { CheckBox } from '../common/CheckBox';
import { getProduct } from '../hok/getCategory';
import { addItem } from '../data/slice';

const Form = styled('form')`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
const ImageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  overflow-y: auto;
  max-height: 800px;
  margin-right: 15px;
`;
const ScrollContainer = styled('div')`
  height: 550px;
  min-width: 70px;
  overflow-y: auto;
  margin-right: 15px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #5ece7b;
    border-radius: 15px;
    height: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: lightBlue;
    max-height: 10px;
  }
`;
const DescriptionContainer = styled('div')`
  font-family: 'Roboto Condensed';
  font-size: 16px;
  line-height: 26px;
  margin: 40px 0 0 0;
`;

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      path: this.props?.data.gallery[0],
    };
  }

  handlerPath = (path) => {
    this.setState({ path });
  };

  addToCart = (e, data) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      const attributes = Object.entries(Object.fromEntries(new FormData(e.target)));

      this.props.addItem({
        id: data.id,
        attributes,
        brand: data.brand,
        gallery: data.gallery,
        name: data.name,
        prices: data.prices,
        count: 1,
      });

      this.props.navigate(-1);
    }
  };

  render() {
    const { gallery, brand, name, attributes, prices, description } = this.props.data.product;
    return (
      <Form onSubmit={(e) => this.addToCart(e, this.props.data.product)}>
        <ScrollContainer>
          <ImageContainer>
            {gallery.map((el) => {
              return (
                <Image
                  key={el}
                  src={el}
                  width={80}
                  height={80}
                  onClick={() => this.handlerPath(el)}
                  cursor="pointer"
                  alt="additional image"
                />
              );
            })}
          </ImageContainer>
        </ScrollContainer>
        <Image src={this.state.path || gallery.at(0)} width={610} height={510} />
        <div style={{ width: '292px', margin: '0 15px' }}>
          <div>
            <Typography fs="30px" fw="600" lh="27px">
              {brand}
            </Typography>
            <Typography fs="30px" fw="400" lh="27px" mr="16px 0">
              {name}
            </Typography>
          </div>
          <div style={{ margin: '24px 0' }}>
            {attributes.map((attr) => {
              return (
                <div key={attr.id}>
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
                        required
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div style={{ margin: '12px 0 20px 0' }}>
            <TypographyRoboto fs="18px" fw="700" mr="10px 0">
              Price:
            </TypographyRoboto>
            <Typography fs="24px" fw="700">
              {prices[0].amount}$
            </Typography>
          </div>
          <Button height="52px" color="white" border="1px solid #5ECE7B" type="submit">
            ADD TO CART
          </Button>
          <DescriptionContainer>
            <Markup content={description} />
          </DescriptionContainer>
        </div>
      </Form>
    );
  }
}

export default connect(null, { addItem })(getProduct(ProductPage));
