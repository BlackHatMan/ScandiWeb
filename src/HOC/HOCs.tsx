import { useParams } from 'react-router-dom';
import { ComponentClass } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORY, GET_PRODUCT, GET_CURRENCY } from '../data/query';
import { propsCategory } from '../route/CategoryPage';
import { currency, product } from '../types/types';
import { ProductProps } from '../route/ProductPage';
import { DropDownProps } from '../common/DropDown';

interface categoryData {
  category: {
    products: product[];
  };
}

export function withGetCategory(Component: ComponentClass<propsCategory>) {
  return function ComponentWithData(props: any) {
    const param = useParams();

    const { loading, data, error } = useQuery<categoryData>(GET_CATEGORY, {
      variables: {
        arg: {
          title: param.category,
        },
      },
    });

    if (loading) {
      return <h2>Here might be a spinner</h2>;
    }

    if (!data?.category || error) {
      return null;
    }

    return <Component {...props} param={param.category} products={data.category.products} />;
  };
}

export function withGetProduct(Component: ComponentClass<ProductProps>) {
  return function ComponentWithData(props: any) {
    const param = useParams();

    const { loading, data, error } = useQuery<{ product: product }>(GET_PRODUCT, {
      variables: {
        id: param.categoryId,
      },
    });

    if (loading) {
      return <h2>Here might be a spinner</h2>;
    }

    if (!data?.product || error) {
      return null;
    }

    return <Component {...props} product={data.product} />;
  };
}

export function withGetCurrency(Component: ComponentClass<DropDownProps>) {
  return function ComponentWithData(props: any) {
    const { data, error } = useQuery<{ currencies: currency }>(GET_CURRENCY);

    if (!data?.currencies || error) {
      return null;
    }

    return <Component {...props} currencies={data.currencies} />;
  };
}
