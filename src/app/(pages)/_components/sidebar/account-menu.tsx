import { Avatar, Button, Icon } from '@/components';

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
    <Button variant="solid" rounded="full" p="2!">
      <Avatar fallback={<Icon name="user" size={32} />} />
    </Button>
  );
}
