import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Portfolio crashed:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          width: '100vw', height: '100vh', background: '#0a0a1a',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', color: '#e8eaf6', fontFamily: 'Inter, sans-serif',
          gap: 16, padding: 32,
        }}>
          <div style={{ fontSize: 48 }}>⚠️</div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>Something crashed</div>
          <pre style={{
            background: 'rgba(255,0,0,0.1)', border: '1px solid rgba(255,0,0,0.3)',
            borderRadius: 8, padding: 16, fontSize: 12, color: '#ff6b6b',
            maxWidth: 600, overflow: 'auto', whiteSpace: 'pre-wrap',
          }}>
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              padding: '10px 24px', background: '#4fc3f7', border: 'none',
              borderRadius: 8, color: '#000', fontWeight: 600, cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
