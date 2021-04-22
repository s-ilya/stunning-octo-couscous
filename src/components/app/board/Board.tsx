import * as React from 'react';

export default (props: { children: Array<JSX.Element> | JSX.Element } = { children: [] }): JSX.Element => {
  const { children } = props;
  return <div className="board">{children}</div>;
};
