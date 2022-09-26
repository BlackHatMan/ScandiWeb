import { Component } from 'react';
import { createPortal } from 'react-dom';

class Portal extends Component {
  constructor(props) {
    super(props);
    this.root = document.getElementById('root');
    this.el = document.createElement('div');
    this.el.className = 'portal';
    this.el.addEventListener('click', this.props.handleClose);
  }

  componentDidMount() {
    this.root.appendChild(this.el);
    document.body.addEventListener('keydown', this.keyListener);
  }
  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.keyListener);
    this.root.removeChild(this.el);
  }
  keyListener = (e) => {
    if (e.key === 'Escape') {
      this.props.handleClose();
    }
  };
  render() {
    if (!this.props.isVisible) return false;
    return createPortal(this.props.children, this.root);
  }
}

export default Portal;
