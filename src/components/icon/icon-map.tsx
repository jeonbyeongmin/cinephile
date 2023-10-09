import { FaCircleUser } from 'react-icons/fa6';
import { FiEdit, FiMenu, FiMoreHorizontal, FiMoreVertical, FiPlusSquare, FiRefreshCcw, FiX } from 'react-icons/fi';
import { GoAlertFill, GoHome, GoHomeFill } from 'react-icons/go';
import {
  IoChatbubbleOutline,
  IoChevronBackOutline,
  IoChevronDownOutline,
  IoChevronForwardOutline,
  IoChevronUpOutline,
  IoHeartOutline,
  IoPeople,
  IoPeopleOutline,
  IoSearch,
  IoSearchOutline,
  IoShareOutline,
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
  heart: IoHeartOutline,
  reply: IoChatbubbleOutline,
  share: IoShareOutline,
  chevronLeft: IoChevronBackOutline,
  chevronRight: IoChevronForwardOutline,
  chevronUp: IoChevronUpOutline,
  chevronDown: IoChevronDownOutline,
  change: FiRefreshCcw,
  close: FiX,
  alert: GoAlertFill,
  user: FaCircleUser,
  sort: MdOutlineSort,
  addBox: FiPlusSquare,
};

export type IconName = keyof typeof iconMap;
