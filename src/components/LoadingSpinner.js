import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="container">
      <div className="spinner">
        <div className="dot-loader" />
        <div className="dot-loader" />
        <div className="dot-loader" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
