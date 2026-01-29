import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback?: ReactNode;
  title?: string;
  message?: string;
  retryLabel?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-red-900">
          <h2 className="text-lg font-bold mb-2">{this.props.title || 'Something went wrong'}</h2>
          <p className="text-sm mb-4">{this.props.message || 'The component could not be rendered due to an error.'}</p>
          <pre className="text-xs bg-red-100 p-2 rounded overflow-auto max-h-40">
            {this.state.error?.message}
          </pre>
          <button 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700"
            onClick={() => this.setState({ hasError: false })}
          >
            {this.props.retryLabel || 'Try again'}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}