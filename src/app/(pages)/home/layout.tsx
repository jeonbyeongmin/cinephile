import { Button, Header, Icon } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { flex } from '@/styled-system/patterns';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" className={css({ pb: 28 })}>
      <Header className={flex({ justify: 'space-between' })}>
        <span>홈</span>
        <Button
          variant="outline"
          size="sm"
          css={{ fontSize: 'sm' }}
          rounded="full"
          leftElement={<Icon name="sort" size={20} />}
        >
          반응순
        </Button>
      </Header>
      {children}
    </Flex>
  );
}
