import { FiEdit, FiHeart, FiMenu, FiMessageSquare, FiMoreHorizontal, FiShare2 } from 'react-icons/fi';

// add new icons here
export const iconMap = {
  edit: FiEdit,
  menu: FiMenu,
  more: FiMoreHorizontal,
  heart: FiHeart,
  reply: FiMessageSquare,
  share: FiShare2,
};

export type IconName = keyof typeof iconMap;
