import * as React from 'react';
import {FC} from "react";

export interface CellProps {
  id: number,
  onClick?: (id: number) => void
}

export const Cell: FC<CellProps> = ({id, onClick}): JSX.Element => {
  return (
    <div onClick={() => onClick && onClick(id)} className="cell">
      {id}
    </div>
  );
};
