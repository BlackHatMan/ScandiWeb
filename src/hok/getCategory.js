import { useQuery } from '@apollo/client';
import { GET_CATEGORY, GET_PRODUCT } from '../data/query';
import { useParams } from 'react-router-dom';

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
    return <Component {...props} param={param} data={data?.category?.products} />;
  };
}

export function getProduct(Component) {
  return (props) => {
    const param = useParams();
    const { data } = useQuery(GET_PRODUCT, {
      variables: {
        id: param.categoryId,
      },
    });
    return <Component {...props} data={data} />;
  };
}
