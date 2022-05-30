import React from 'react';
import * as icons from './icons';

export interface Props {
  icon: IconName;
}

export type IconName = keyof typeof icons;

const Icon = ({ icon }: Props) => {
  const IconComp = icons[icon];
  if (IconComp)
    return (
        <IconComp />
    );
  throw new Error(`Unknown icon "${icon}"`);
};

export default Icon;
