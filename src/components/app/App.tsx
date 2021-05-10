import * as React from 'react';
import Board from 'components/app/board/Board';
import { Cell } from 'components/app/cell/Cell';

export default (): JSX.Element => {
  const [ids] = React.useState<Array<number>>([1, 2, 3]);

  return (
    <Board>
      {ids.map((id) => (
        <Cell key={id} id={id} onClick={(id) => console.log(id)} />
      ))}
    </Board>
  );
};
