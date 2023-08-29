import { Flex } from '@/components/base';
import { css } from '@/styled-system/css';

export default function HomePage() {
  return (
    <Flex direction="col">
      <Flex direction="col" className={css({ bg: 'red.500' })}>
        <div className={css({ fontSize: '2xl', color: 'red.300', fontWeight: 'bold' })}>Hello 🐼!</div>
      </Flex>
    </Flex>
  );
}
