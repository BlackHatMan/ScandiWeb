import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CATEGORY, GET_PRODUCT, GET_CURRENCY } from '../data/query';

export function getCategory(Component) {
  return (props) => {
    const param = useParams();

    const { data } = useQuery(GET_CATEGORY, {
      variables: {
        arg: {
          title: param.category,
        },
      },
    });

    if (!data?.category) {
      return null;
    }

    return <Component {...props} param={param} products={data.category.products} />;
  };
}

export function getProduct(Component) {
  return (props) => {
    const param = useParams();
    const navigate = useNavigate();

    const { data } = useQuery(GET_PRODUCT, {
      variables: {
        id: param.categoryId,
      },
    });

    if (!data?.product) {
      return null;
    }
    return <Component {...props} data={data} navigate={navigate} />;
  };
}

export function getCurrency(Component) {
  return (props) => {
    const { data } = useQuery(GET_CURRENCY);

    if (!data?.currencies) {
      return null;
    }

    return <Component {...props} currencies={data.currencies} />;
  };
}
