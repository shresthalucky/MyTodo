import React from 'react';

import Todo from '../Todo';

function List({list, ...props}) {
  return(
    list.map(todo => <Todo detail={todo} key={todo.id} {...props} />)
  );
}

export default List;
