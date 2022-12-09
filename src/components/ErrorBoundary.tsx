import { Component, ReactNode } from 'react';

interface errorProps {
  children: ReactNode;
}
interface errorState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<errorProps, errorState> {
  constructor(props: errorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
