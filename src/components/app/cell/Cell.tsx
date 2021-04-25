import * as React from 'react';

export interface CellProps {
  id: number,
  onClick?: (id: number) => void
}

export const Cell = (props: CellProps): JSX.Element => {
  const { id, onClick } = props;
  return (
    <div onClick={() => onClick && onClick(id)} className="cell">
      {id}
    </div>
  );
};
