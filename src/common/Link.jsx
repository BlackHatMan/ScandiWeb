import { Component } from 'react';
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(RouterLink)`
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-transform: uppercase;
  color: #5ece7b;
  text-decoration: none;
  margin: 0 1rem;
  padding-bottom: 1rem;
  position: relative;
  border-bottom: ${(props) => props.border};

  &:after {
    content: '';
    position: absolute;
    width: ${(props) => (props.active === 'true' ? '100%' : '0')};
    height: 2px;
    left: ${(props) => (props.active === 'true' ? '0' : '50%')};
    bottom: 0;
    background-color: #5ece7b;
    transition: all ease-in-out 0.2s;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

function Wrapper(Child) {
  return function ComponentWithRouterProp(props) {
    const location = useLocation();
    const param = useParams();
    return <Child {...props} location={location} />;
  };
}

class Link extends Component {
  render() {
    const active = (this.props.location.pathname === this.props.to).toString();
    return (
      <StyledLink to={this.props.to} active={active}>
        {this.props.children}
      </StyledLink>
    );
  }
}
export default Wrapper(Link);
