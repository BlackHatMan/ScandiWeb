import { PureComponent } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(RouterLink)`
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.green};
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
    background-color: ${(props) => props.theme.color.green};
    transition: all ease-in-out 0.2s;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

class Link extends PureComponent {
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

function Wrapper(Child) {
  return function ComponentWithRouterProp(props) {
    const location = useLocation();
    return <Child {...props} location={location} />;
  };
}
