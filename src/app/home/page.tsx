import { css } from '@/styled-system/css';
import { VStack } from '@/styled-system/jsx';

export default function HomePage() {
  return (
    <VStack>
      <VStack className={css({ bg: 'red.500' })}>
        <div className={css({ fontSize: '2xl', color: 'blue.300', fontWeight: 'bold' })}>Hello 🐼!</div>
      </VStack>
    </VStack>
  );
}
