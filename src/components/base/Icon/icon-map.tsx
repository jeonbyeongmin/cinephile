import { FiEdit, FiMenu } from 'react-icons/fi';

// add new icons here
export const iconMap = {
  edit: FiEdit,
  menu: FiMenu,
};

export type IconName = keyof typeof iconMap;
