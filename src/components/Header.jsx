import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../common/styledComponents';
import BasketOverlay from './BasketOverlay';
import Portal from './Portal';
import DropDown from '../common/DropDown';
import { ReactComponent as CartLogo } from '../svg/Card_logo.svg';
import img from '../svg/Vector.svg';
import { Link as LinkRote } from 'react-router-dom';
import Link from './../common/Link';

const Logo = styled('div')`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url(${img});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  & span {
    height: 1.2rem;
    width: 1.2rem;
    line-height: 1rem;
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
      <Container padding="25px 0" css="height:80px">
        <nav>
          <Link to="/Women">Women</Link>
          <Link to="/Men">Men</Link>
          <Link to="/Kids">Kids</Link>
        </nav>
        <LinkRote to="/cart">
          <CartLogo />
        </LinkRote>
        <Container width="80px" css="align-items: center;">
          <DropDown />
          <Logo onClick={this.handlerPortal}>
            <span>3</span>
          </Logo>
        </Container>
        {this.state.isOpen && (
          <Portal>
            <BasketOverlay />
          </Portal>
        )}
      </Container>
    );
  }
}

export default Header;
