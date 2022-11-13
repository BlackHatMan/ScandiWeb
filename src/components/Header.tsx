import { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import CartOverlay from './CartOverlay';
import DropDown from '../common/DropDown';
import { Container } from '../common/styledComponents';
import Link from '../common/Link';
import { ReactComponent as CartLogo } from '../svg/Card_logo.svg';
import basketLogo from '../svg/Vector.svg';
import { RootState } from '../data/store';

const Logo = styled('div')`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 15px;
  background-image: url(${basketLogo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  & span {
    height: 1.2rem;
    width: 1.2rem;
    line-height: 1.2rem;
    font-weight: 600;
    text-align: center;
    display: block;
    background-color: black;
    color: white;
    border-radius: 50%;
    transform: translate(14px, -8px);
  }
`;

class Header extends Component<PropsFromRedux, { isOpen: boolean }> {
  constructor(props: PropsFromRedux) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handlerOpenBasket = () => {
    this.setState((prev) => ({
      isOpen: !prev.isOpen,
    }));
  };

  render() {
    return (
      <Container padding="25px 0" height="80px">
        <nav>
          <Link to="/all">All</Link>
          <Link to="/clothes">Clothes</Link>
          <Link to="/tech">Tech</Link>
        </nav>
        <CartLogo />
        <Container width="80px" alignItems="center">
          <DropDown />
          <Logo onClick={this.handlerOpenBasket}>
            <span>{this.props.count || 0}</span>
          </Logo>
        </Container>
        {this.state.isOpen && <CartOverlay close={this.handlerOpenBasket} />}
      </Container>
    );
  }
}
const mapStateToProps = (state: RootState) => ({ count: state.total.count });

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Header);
