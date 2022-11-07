import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CATEGORY, GET_PRODUCT, GET_CURRENCY } from '../data/query';
import { currency, product } from '../types/types';
import { ComponentClass } from 'react';
import { PropsFromRedux } from '../route/CategoryPage';

interface categoryData {
  category: {
    products: product[];
  };
}

export function getCategory(Component: ComponentClass<PropsFromRedux>) {
  return (props: any) => {
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

export function getProduct(Component: ComponentClass) {
  return (props: any) => {
    const param = useParams();
    const navigate = useNavigate();

    const { data, error } = useQuery<{ product: product }>(GET_PRODUCT, {
      variables: {
        id: param.categoryId,
      },
    });

    if (!data?.product || error) {
      return null;
    }

    return <Component {...props} data={data} navigate={navigate} />;
  };
}

export function getCurrency(Component: ComponentClass) {
  return (props: any) => {
    const { data, error } = useQuery<{ currencies: currency }>(GET_CURRENCY);

    if (!data?.currencies || error) {
      return null;
    }

    return <Component {...props} currencies={data.currencies} />;
  };
}
