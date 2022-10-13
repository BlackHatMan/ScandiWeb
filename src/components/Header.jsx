import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../common/styledComponents';
import Link from './../common/Link';
import BasketOverlay from './BasketOverlay';
import DropDown from '../common/DropDown';
import { ReactComponent as CartLogo } from '../svg/Card_logo.svg';
import img from '../svg/Vector.svg';
import { connect } from 'react-redux';

const Logo = styled('div')`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 15px;
  background-image: url(${img});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  & span {
    height: 1.2rem;
    width: 1.2rem;
    line-height: 1.1rem;
    font-weight: 600;
    text-align: center;
    display: block;
    background-color: black;
    color: white;
    border-radius: 50%;
    transform: translate(14px, -8px);
  }
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }
  handlerPortal = () => {
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
        <Container width="80px" style={{ alignItems: 'center' }}>
          <DropDown />
          <Logo onClick={this.handlerPortal}>
            <span>{this.props.total.count || 0}</span>
          </Logo>
        </Container>
        {this.state.isOpen && <BasketOverlay close={this.handlerPortal} />}
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({ total: state.total });

export default connect(mapStateToProps, null)(Header);
