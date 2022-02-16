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
import './Tile.css';
import { Icon } from './Icon';

export namespace Tile {
  export interface Props {
    title: string;
    icon: string;
    children?: React.ReactNode;
  }
}

export function Tile(props: Tile.Props) {
  return (
    <div className="Tile">
      <Icon src={props.icon} />
      <span className="Tile-label">{props.title}</span>
      <span className="Tile-content">{props.children}</span>
    </div>
  );
}
