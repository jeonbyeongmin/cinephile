import { FaCircleUser } from 'react-icons/fa6';
import {
  FiChevronDown,
  FiEdit,
  FiHeart,
  FiMenu,
  FiMessageSquare,
  FiMoreHorizontal,
  FiMoreVertical,
  FiPlusSquare,
  FiRefreshCcw,
  FiShare2,
  FiX,
} from 'react-icons/fi';
import { GoAlertFill, GoHome, GoHomeFill } from 'react-icons/go';
import {
  IoChevronBackOutline,
  IoPeople,
  IoPeopleOutline,
  IoSearch,
  IoSearchOutline,
  IoVideocam,
  IoVideocamOutline,
} from 'react-icons/io5';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatStrikethrough,
  MdOutlineRedo,
  MdOutlineSort,
  MdOutlineUndo,
} from 'react-icons/md';

// add new icons here
export const iconMap = {
  // menu icons
  home: GoHome,
  homeFill: GoHomeFill,
  search: IoSearchOutline,
  searchFill: IoSearch,
  movie: IoVideocamOutline,
  movieFill: IoVideocam,
  people: IoPeopleOutline,
  peopleFill: IoPeople,

  // editor icons
  bold: MdFormatBold,
  italic: MdFormatItalic,
  bulletList: MdFormatListBulleted,
  orderedList: MdFormatListNumbered,
  blockquote: MdFormatQuote,
  strike: MdFormatStrikethrough,
  undo: MdOutlineUndo,
  redo: MdOutlineRedo,

  edit: FiEdit,
  menu: FiMenu,
  more: FiMoreHorizontal,
  moreVertical: FiMoreVertical,
  heart: FiHeart,
  reply: FiMessageSquare,
  share: FiShare2,
  chevronDown: FiChevronDown,
  arrowLeft: IoChevronBackOutline,
  change: FiRefreshCcw,
  close: FiX,
  alert: GoAlertFill,
  user: FaCircleUser,
  sort: MdOutlineSort,
  addBox: FiPlusSquare,
};

export type IconName = keyof typeof iconMap;
