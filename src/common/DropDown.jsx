import { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setCurrency } from '../data/slice';
import { getCurrency } from '../hok/hoks';

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
  z-index: 101;
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
  z-index: 101;
`;

class DropDown extends PureComponent {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  openDropDown = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  render() {
    return (
      <DropDownContainer onClick={this.openDropDown}>
        <DropDownHeader isOpen={this.state.isOpen}>
          {this.props.currencies[this.props.index].symbol}
        </DropDownHeader>
        {this.state.isOpen && (
          <>
            <Overlay />
            <DropDownList>
              {this.props.currencies.map((option, i) => (
                <DropDownItem
                  key={option.label + i}
                  onClick={() => this.props.setCurrency({ index: i, symbol: option.symbol })}
                >
                  {option.symbol}
                </DropDownItem>
              ))}
            </DropDownList>
          </>
        )}
      </DropDownContainer>
    );
  }
}
const mapStateToProps = (state) => ({ index: state.indexSelectedCurrency });

export default connect(mapStateToProps, { setCurrency })(getCurrency(DropDown));
