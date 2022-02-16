// Source code for the Axlib Telemetry Server.
// Copyright (C) 2021 AXIA Technologies (UK) Ltd.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

import * as React from 'react';
import { Maybe } from '../../common';
import { Column, THeadCell } from './';
import { Persistent } from '../../persist';

import './THead.css';

export namespace THead {
  export interface Props {
    columns: Column[];
    sortBy: Persistent<Maybe<number>>;
  }
}

export class THead extends React.Component<THead.Props, {}> {
  private sortBy: Maybe<number>;

  constructor(props: THead.Props) {
    super(props);

    this.sortBy = props.sortBy.get();
  }

  public shouldComponentUpdate(nextProps: THead.Props) {
    return this.sortBy !== nextProps.sortBy.get();
  }

  public render() {
    const { columns, sortBy } = this.props;
    const last = columns.length - 1;

    this.sortBy = sortBy.get();

    return (
      <thead>
        <tr className="THead">
          {columns.map((col, index) => (
            <THeadCell
              key={index}
              column={col}
              index={index}
              last={last}
              sortBy={sortBy}
            />
          ))}
        </tr>
      </thead>
    );
  }
}
