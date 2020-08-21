import React from 'react';

function withLoading(Component) {

  function LoadingComponent({ isLoading, error, ...props }) {

    if (error) {
      return (
        <div className="loading">Error Occured!</div>
      );
    }

    if (!isLoading) {
      return (<Component {...props} />)
    }

    return (<div className="loading">Loading...</div>);

  }

  return LoadingComponent;
}

export default withLoading;