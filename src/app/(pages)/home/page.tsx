import { Button } from '@/components/base';
import { css } from '@/styled-system/css';
import { VStack } from '@/styled-system/jsx';

export default function HomePage() {
  return (
    <VStack>
      <VStack className={css({ bg: 'red.500' })}>
        <Button>test</Button>
      </VStack>
    </VStack>
  );
}
