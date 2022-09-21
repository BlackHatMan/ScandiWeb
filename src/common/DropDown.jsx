import { Component } from 'react';
import styled from 'styled-components';

const DropDownContainer = styled('div')`
  width: 50px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
`;

const DropDownHeader = styled('div')`
  padding: 8px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 40%;
    right: 10px;
    display: inline-block;
    width: 6px;
    height: 6px;
    border: solid black;
    border-width: 0 1px 1px 0;
    transition: transform 0.1s ease;
    transform: ${(props) => (props.isOpen ? 'rotate(225deg)' : 'rotate(45deg)')};
  }
`;

const DropDownList = styled('ul')`
  position: absolute;
  z-index: 100;
  width: 90px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  padding: 0;
  margin: 0;
  background: #ffffff;
  box-sizing: border-box;
`;

const DropDownItem = styled('li')`
  list-style: none;
  padding: 0.5rem;
  &:hover {
    background-color: #eeeeee;
  }
`;
const Overlay = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`;
const options = ['$ USD', '€ EUR', '¥ JPY'];

class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      selectedOption: '$',
    };
  }

  currencyHandler = (value) => () => {
    this.setState({ selectedOption: value.charAt(0) });
  };

  openDropDown = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  render() {
    return (
      <DropDownContainer onClick={this.openDropDown}>
        <DropDownHeader isOpen={this.state.isOpen}>{this.state.selectedOption}</DropDownHeader>
        {this.state.isOpen && (
          <>
            <Overlay />
            <DropDownList>
              {options.map((option) => (
                <DropDownItem onClick={this.currencyHandler(option)} key={option}>
                  {option}
                </DropDownItem>
              ))}
            </DropDownList>
          </>
        )}
      </DropDownContainer>
    );
  }
}
export default DropDown;
