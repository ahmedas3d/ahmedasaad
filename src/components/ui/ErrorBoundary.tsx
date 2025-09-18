import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio Error:', error, errorInfo);

    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Report to error tracking service
      console.error('Production error:', { error: error.message, stack: error.stack, errorInfo });
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 mx-auto mb-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">!</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">
              Oops! Something went wrong
            </h1>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Don't worry, this is just a temporary issue with Ahmed's portfolio.
              The site is usually working perfectly!
            </p>

            <div className="space-y-3">
              <button
                onClick={this.handleReload}
                className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Reload Portfolio
              </button>

              <button
                onClick={() => window.history.back()}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Go Back
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>If the problem persists, please contact Ahmed directly.</p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;