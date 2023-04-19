'use client';

import { Dropdown } from '@nextui-org/react';
import React from 'react';

interface DropdownProps {
  name?: string;
  item?: string;
}

export function KeyswitchList({ name }: DropdownProps) {
  var keyswitches = [
    ['None', 'None', '', '0.00'],
    ['Cherry MX Red', 'Cherry MX', 'Red', '5.00'],
    ['Cherry MX Blue', 'Cherry MX', 'Blue', '5.00'],
    ['Cherry MX Brown', 'Cherry MX', 'Brown', '5.00'],
    ['Cherry MX Sp', 'Cherry MX', 'Speed Silver', '5.00'],
  ];
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
        {keyswitches.map(([key, brand, color, price]) => (
          <Dropdown.Item key={key}>
            {brand} {color} : {price}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function KeycapList({ name }: DropdownProps) {
  var keycaps = [
    ['None', '', 'None', '0.00'],
    ['GMK Analog Dreams', 'GMK', 'Analog Dreams', '120.00'],
    ['GMK Classic Retro', 'GMK', 'Classic Retro', '150.00'],
    ['GMK Handarbeit', 'GMK', 'Handarbeit', '135.00'],
    ['Cherry Industrial', 'Cherry', 'Industrial', '95.00'],
    ['Cherry Olivia', 'Cherry', 'Olivia', '95.00'],
  ];
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
        {keycaps.map(([key, profile, name, price]) => (
          <Dropdown.Item key={key}>
            {profile} {name} : {price}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function KeyboardCase({ name, item }: DropdownProps) {
  if (item == 'tenkeyless') {
    var keyCase = [
      ['KBDFans Odin 75', 'KBDFans', 'Odin 75', '400.00'],
      ['KBDFans Tiger Lite', 'KBDFans', 'Tiger Lite', '130.00'],
      ['Novelkeys NK87', 'Novelkeys', 'NK87', '150.00'],
      ['Novelkeys Box 75', 'Novelkeys', 'Box 75', '650.00'],
    ];
  } else if (item == '65') {
    var keyCase = [
      ['KBDFans Tofu 65', 'KBDFans', 'Tofu 65', '180.00'],
      ['KBDFans KBD67', 'KBDFans', 'KBD67', '195.00'],
      ['Novelkeys NK65 Entry', 'Novelkeys', 'NK65 Entry', '80.00'],
      ['Novelkeys NK65', 'Novelkeys', 'NK65', '100.00'],
      ['Novelkeys NK65 - Olivia', 'Novelkeys', 'NK65 - Olivia', '150.00'],
    ];
  } else if (item == 'sixty') {
    var keyCase = [
      ['KBDFans Tofu 60 v2', 'KBDFans', 'Tofu 60 v2', '140.00'],
      ['KBDFans KBD67', 'KBDFans', 'KBD67', '195.00'],
      ['Novelkeys NK60', 'Novelkeys', 'NK60', '90.00'],
    ];
  } else if (item == 'fullsize') {
    var keyCase = [
      ['KBDFans Yeti', 'KBDFans', 'Yeti', '440.00'],
      ['Novelkeys NK105 Entry', 'Novelkeys', 'NK105 Entry', '110.00'],
      ['Novelkeys NK105', 'Novelkeys', 'NK105', '140.00'],
    ];
  } else {
    var keyCase = [['N/A', '', '', 'N/A']];
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
        {keyCase.map(([key, brand, name, price]) => (
          <Dropdown.Item key={key}>
            {brand} {name} : {price}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
