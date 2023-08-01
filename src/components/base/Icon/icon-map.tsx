import { FiChevronDown, FiEdit, FiHeart, FiMenu, FiMessageSquare, FiMoreHorizontal, FiShare2 } from 'react-icons/fi';
import { GoDeviceCameraVideo, GoHome, GoHomeFill, GoPerson, GoPersonFill, GoSearch } from 'react-icons/go';

// add new icons here
export const iconMap = {
  edit: FiEdit,
  menu: FiMenu,
  more: FiMoreHorizontal,
  heart: FiHeart,
  reply: FiMessageSquare,
  share: FiShare2,
  search: GoSearch,
  movie: GoDeviceCameraVideo,
  people: GoPerson,
  peopleFill: GoPersonFill,
  home: GoHome,
  homeFill: GoHomeFill,
  chevronDown: FiChevronDown,
};

export type IconName = keyof typeof iconMap;
