'use client';

import { Dropdown } from '@nextui-org/react';
import React from 'react';

interface DropdownProps {
  name: string;
  item: string;
}

export default function DropdownList({ name, item }: DropdownProps) {
  if (item === 'switch') {
    var DropdownArray = [
      [`${name}`, `${name}`],
      ['1', 'Item 1'],
      ['2', 'Item 2'],
      ['3', 'Item 3'],
      ['4', 'Item 4'],
    ];
  } else if (item === 'keys') {
    var DropdownArray = [
      [`${name}`, `${name}`],
      ['40%', '40%'],
      ['60%', '60%'],
      ['65%', '65%'],
      ['Tenkeyless', 'Tenkeyless'],
      ['100%', '100%'],
      ['105%', '105%'],
    ];
  } else if (item === 'keycapstyle') {
    var DropdownArray = [
      [`${name}`, `${name}`],
      ['PBT Cherry', 'PBT Cherry'],
      ['PBT DSA', 'PBT DSA'],
      ['PBT OEM', 'PBT OEM'],
      ['ABS Cherry', 'ABS Cherry'],
      ['ABS SA', 'ABS SA'],
      ['ABS DSA', 'ABS DSA'],
      ['ABS OEM', 'ABS OEM'],
    ];
  } else if (item === 'yesno') {
    var DropdownArray = [
      [`${name}`, `${name}`],
      ['Yes', 'Yes'],
      ['No', 'No'],
    ];
  } else {
    var DropdownArray = [[`${name}`, `${name}`]];
  }

  let selected: any;
  let setSelected: any;
  [selected, setSelected] = React.useState(new Set([`${name}`]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat>{selectedValue}</Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        disabledKeys={[`${name}`]}
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}>
        {DropdownArray.map(([key, title]) => (
          <Dropdown.Item key={key}>{title}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
