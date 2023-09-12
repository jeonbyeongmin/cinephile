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
import { GoAlertFill, GoDeviceCameraVideo, GoHome, GoHomeFill, GoPerson, GoPersonFill, GoSearch } from 'react-icons/go';
import { GrSearch } from 'react-icons/gr';
import { LuHeading1, LuHeading2, LuHeading3, LuHeading4, LuHeading5, LuHeading6 } from 'react-icons/lu';

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

// social icons
import { RiGoogleFill, RiKakaoTalkFill } from 'react-icons/ri';

// add new icons here
export const iconMap = {
  edit: FiEdit,
  menu: FiMenu,
  more: FiMoreHorizontal,
  moreVertical: FiMoreVertical,
  heart: FiHeart,
  reply: FiMessageSquare,
  share: FiShare2,
  search: GoSearch,
  searchFill: GrSearch,
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
  heading1: LuHeading1,
  heading2: LuHeading2,
  heading3: LuHeading3,
  heading4: LuHeading4,
  heading5: LuHeading5,
  heading6: LuHeading6,
  arrowLeft: FiArrowLeft,
  change: FiRefreshCcw,
  close: FiX,
  kakao: RiKakaoTalkFill,
  google: RiGoogleFill,
  alert: GoAlertFill,
  addBox: FiPlusSquare,
};

export type IconName = keyof typeof iconMap;
