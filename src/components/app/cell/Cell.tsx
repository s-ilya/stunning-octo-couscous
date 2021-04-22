import * as React from 'react';

export default (props: { id: number; onClick?: (id: number) => void }): JSX.Element => {
  const { id, onClick } = props;
  return (
    <div onClick={() => typeof onClick !== undefined && onClick(id)} className="cell">
      {id}
    </div>
  );
};
