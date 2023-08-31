import {
  Avatar,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/base';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

const HOME_PATH = '/home';
const SEARCH_PATH = '/search';
const MOVIE_PATH = '/channel';
const PEOPLE_PATH = '/people';

// TODO: icon 추가
type Item = {
  name: string;
  path: string;
};

const items: Item[] = [
  { name: '내 스레드', path: HOME_PATH },
  { name: '내 답변', path: SEARCH_PATH },
  { name: '좋아요 표시한 스레드', path: MOVIE_PATH },
  { name: '로그아웃', path: PEOPLE_PATH },
];

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="solid" rounded="full" p={2}>
          <Avatar />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className={css({
          w: 56,
          bg: 'gray.800',
          color: 'gray.50',
          rounded: 'lg',
          overflow: 'hidden',
          p: 1,
          animation: 'slideUpAndFade 150ms',
          userSelect: 'none',
        })}
      >
        <DropdownMenuItem className={css({ p: 2, outline: 'none', _hover: { bg: 'gray.700' }, rounded: 'md' })}>
          <Flex align="center" gap={2}>
            <Avatar size="md" />
            <Flex direction="column">
              <p className={css({ fontSize: 'sm', lineClamp: 1 })}>전병민</p>
              <p className={css({ fontSize: 'xs', fontWeight: 'normal', color: 'gray.400', lineClamp: 1 })}>
                qudals7613@gmail.com
              </p>
            </Flex>
          </Flex>
        </DropdownMenuItem>
        {items.map(item => (
          <DropdownMenuItem
            key={item.name}
            className={css({
              p: 2,
              fontSize: 'sm',
              _hover: { bg: 'gray.700' },
              outline: 'none',
              rounded: 'md',
            })}
          >
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
