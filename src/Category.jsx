/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import DropDown from './common/DropDown';
import { ReactComponent as CardLogo } from './svg/Card_logo.svg';
import './category.css';

class Category extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <a className="nav-link" href="#">
            Women
          </a>
          <a className="nav-link" href="#">
            Men
          </a>
          <a className="nav-link" href="#">
            Kids
          </a>
        </nav>
        <CardLogo />
        <div className="currency_wrapper">
          <DropDown />
          <div className="cart_logo">
            <span className="cart_qty">3</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
