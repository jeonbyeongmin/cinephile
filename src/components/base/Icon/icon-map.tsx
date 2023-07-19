import { FiEdit, FiMenu, FiMoreHorizontal } from 'react-icons/fi';

// add new icons here
export const iconMap = {
  edit: FiEdit,
  menu: FiMenu,
  more: FiMoreHorizontal,
};

export type IconName = keyof typeof iconMap;
