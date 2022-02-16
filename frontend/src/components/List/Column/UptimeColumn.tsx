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
import { Column } from './';
import { Node } from '../../../state';
import { Ago } from '../../';
import icon from '../../../icons/pulse.svg';

export class UptimeColumn extends React.Component<Column.Props, {}> {
  public static readonly label = 'Node Uptime';
  public static readonly icon = icon;
  public static readonly width = 58;
  public static readonly setting = 'uptime';
  public static readonly sortBy = ({ startupTime }: Node) => startupTime || 0;

  public shouldComponentUpdate(nextProps: Column.Props) {
    // Uptime only changes when the node does
    return this.props.node !== nextProps.node;
  }

  render() {
    const { startupTime } = this.props.node;

    if (!startupTime) {
      return <td className="Column">-</td>;
    }

    return (
      <td className="Column">
        <Ago when={startupTime} justTime={true} />
      </td>
    );
  }
}
