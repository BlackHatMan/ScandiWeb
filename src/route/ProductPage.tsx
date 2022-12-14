import { Component, FormEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import { Markup } from 'interweave';
import { Typography, Button } from '../common/styledComponents';
import { Image } from '../common/Image';
import { CheckBox } from '../common/CheckBox';
import { withGetProduct } from '../HOC/HOCs';
import { addItem } from '../data/slice';
import { RootState } from '../data/store';
import { product } from '../types/types';

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
  overflow-x: hidden;
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
    background: ${(props) => props.theme.color.green};
    border-radius: 15px;
    height: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: lightBlue;
    max-height: 10px;
  }
`;
const DescriptionContainer = styled('div')`
  font-family: ${(props) => props.theme.fonts.roboto};
  font-size: 16px;
  line-height: 26px;
  margin: 40px 0 0 0;
`;

class ProductPage extends Component<ProductProps, { path: string }> {
  constructor(props: ProductProps) {
    super(props);
    this.state = {
      path: this.props?.product.gallery[0],
    };
  }

  handlerPath = (path: string) => {
    this.setState({ path });
  };

  addToCart = (e: FormEvent<HTMLFormElement>, product: product) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(target));
    /* add checked  field */

    let valueSelectedAttributes = '';

    if (target.checkValidity()) {
      const attributes = this.props.product.attributes.map((el) => {
        return {
          ...el,
          items: el.items.map((attr) => {
            if (attr.value === formData[el.id]) {
              valueSelectedAttributes += '/' + attr.id;
            }
            return {
              ...attr,
              checked: attr.value === formData[el.id],
            };
          }),
        };
      });

      this.props.addItem({
        id: product.id + valueSelectedAttributes,
        attributes,
        brand: product.brand,
        gallery: product.gallery,
        name: product.name,
        prices: product.prices,
        count: 1,
      });
    }
  };

  render() {
    const { gallery, brand, name, attributes, prices, description, inStock } = this.props.product;

    return (
      <Form onSubmit={(e: FormEvent<HTMLFormElement>) => this.addToCart(e, this.props.product)}>
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
        <Image src={this.state.path || gallery[0]} width={610} height={510} alt={name} />
        <div style={{ width: '292px', margin: '0 15px' }}>
          <div>
            <Typography fs="30px" fw="600" lh="27px">
              {brand}
            </Typography>
            <Typography fs="30px" fw="400" lh="27px" m="16px 0">
              {name}
            </Typography>
          </div>
          <div style={{ margin: '24px 0' }}>
            {attributes.map((attr) => {
              return (
                <div key={attr.id}>
                  <Typography roboto fs="18px" fw="700" m="10px 0">
                    {attr.id}
                  </Typography>
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
            <Typography roboto fs="18px" fw="700" m="10px 0">
              Price:
            </Typography>
            <Typography fs="24px" fw="700">
              {prices[this.props.indexSelectedCurrency].amount}
              {this.props.symbol}
            </Typography>
          </div>
          <Button disabled={!inStock} type="submit" height="52px" color="white">
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
const connector = connect((state: RootState) => state, { addItem });
type PropsFromRedux = ConnectedProps<typeof connector>;
export interface ProductProps extends PropsFromRedux {
  product: product;
  navigate: (arg: number) => void;
}
export default connector(withGetProduct(ProductPage));
