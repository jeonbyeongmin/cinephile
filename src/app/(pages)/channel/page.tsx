import { Header } from '@/components';
import { css } from '@/styled-system/css';

export default function ChannelPage() {
  return (
    <>
      <Header className={css({ px: 2 })}>
        <Header.Content className={css({ fontSize: 'lg', fontWeight: 'bold' })}>영화</Header.Content>
      </Header>
    </>
  );
}
