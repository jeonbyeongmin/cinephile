import {
  FiArrowLeft,
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
import { IoPeople, IoPeopleOutline, IoSearch, IoSearchOutline, IoVideocam, IoVideocamOutline } from 'react-icons/io5';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatStrikethrough,
  MdOutlineRedo,
  MdOutlineUndo,
} from 'react-icons/md';
import { RiGoogleFill, RiKakaoTalkFill } from 'react-icons/ri';

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

  // social icons
  kakao: RiKakaoTalkFill,
  google: RiGoogleFill,

  edit: FiEdit,
  menu: FiMenu,
  more: FiMoreHorizontal,
  moreVertical: FiMoreVertical,
  heart: FiHeart,
  reply: FiMessageSquare,
  share: FiShare2,
  chevronDown: FiChevronDown,
  arrowLeft: FiArrowLeft,
  change: FiRefreshCcw,
  close: FiX,
  alert: GoAlertFill,
  addBox: FiPlusSquare,
};

export type IconName = keyof typeof iconMap;
