import { Avatar, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

type Item = {
  name: string;
  path: string;
};

const items: Item[] = [
  { name: '내 스레드', path: '1' },
  { name: '내 답변', path: '2' },
  { name: '좋아요 표시한 스레드', path: '3' },
  { name: '로그아웃', path: '4' },
];

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="solid" rounded="full" p="2!">
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
