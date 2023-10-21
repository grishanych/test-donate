import React, { Component } from 'react';
import styles from './ErrorBoundery.module.scss'


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.centeredError}>
          <h1>Помилка</h1>
          <p>Виникла помилка при відображенні цієї сторінки.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
