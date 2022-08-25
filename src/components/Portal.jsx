import { Component } from 'react';
import { createPortal } from 'react-dom';

class Portal extends Component {
  constructor() {
    super();
    this.root = document.getElementById('root');
    this.el = document.createElement('div');
    this.el.className = 'portal';
  }

  componentDidMount() {
    this.root.appendChild(this.el);
  }
  componentWillUnmount() {
    this.root.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Portal;
