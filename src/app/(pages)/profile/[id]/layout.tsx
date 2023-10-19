import { Header } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

export default async function ProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const userId = params.id;

  return (
    <Flex direction="column">
      <Header>
        <Header.Back />
        <Header.Content className={css({ fontSize: 'md', fontWeight: 'bold' })}>전병민</Header.Content>
      </Header>
      {children}
    </Flex>
  );
}
