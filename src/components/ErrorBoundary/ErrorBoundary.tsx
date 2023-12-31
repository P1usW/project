import React, { ErrorInfo, Component } from 'react';
import style from './errorBoundary.module.scss';

interface StateError {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, StateError> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): StateError {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={style.error_page}>
          <h1 className={style.error_message}>Error</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
