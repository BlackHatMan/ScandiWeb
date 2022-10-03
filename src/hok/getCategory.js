import { useQuery } from '@apollo/client';
import { GET_CATEGORY, GET_PRODUCT } from '../data/query';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

    if (!data) {
      return null;
    }

    return <Component {...props} param={param} data={data.category.products} />;
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

    if (!data) {
      return null;
    }

    return <Component {...props} data={data} navigate={navigate} />;
  };
}

export function getBasketProduct(Component) {
  return (props) => {
    const data = useSelector((state) => state);
    if (!data) {
      return null;
    }

    return <Component {...props} data={data.items} />;
  };
}
