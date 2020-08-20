import React from 'react';

function withLoading(Component) {

  function LoadingComponent({ isLoading, error, ...props }) {

    if (error) {
      return (
        <span>Error Occured!</span>
      );
    }

    if (!isLoading) {
      return (<Component {...props} />)
    }

    return (<div>Loading...</div>);

  }

  return LoadingComponent;
}

export default withLoading;