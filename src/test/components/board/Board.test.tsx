import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Board from '../../../components/app/board/Board';
import Cell from '../../../components/app/cell/Cell';
import * as faker from 'faker';

it('renders board', () => {
  const id = faker.datatype.number();

  render(
    <Board>
      <Cell id={id} />
    </Board>,
  );

  expect(screen.getByText(`${id}`)).toBeInTheDocument();
});
