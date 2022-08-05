import { Component } from 'react';
import { createPortal } from 'react-dom';

const root = document.getElementById('root');

class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  componentDidMount() {
    root.appendChild(this.el);
  }
  componentWillUnmount() {
    root.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Portal;
