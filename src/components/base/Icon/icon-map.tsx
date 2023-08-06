import { FiChevronDown, FiEdit, FiHeart, FiMenu, FiMessageSquare, FiMoreHorizontal, FiShare2 } from 'react-icons/fi';
import { GoDeviceCameraVideo, GoHome, GoHomeFill, GoPerson, GoPersonFill, GoSearch } from 'react-icons/go';

// editor icons
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatStrikethrough,
  MdHorizontalRule,
  MdOutlineRedo,
  MdOutlineUndo,
} from 'react-icons/md';

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
  bold: MdFormatBold,
  horizontalRule: MdHorizontalRule,
  undo: MdOutlineUndo,
  redo: MdOutlineRedo,
  blockquote: MdFormatQuote,
  bulletList: MdFormatListBulleted,
  orderedList: MdFormatListNumbered,
  italic: MdFormatItalic,
  strike: MdFormatStrikethrough,
};

export type IconName = keyof typeof iconMap;
