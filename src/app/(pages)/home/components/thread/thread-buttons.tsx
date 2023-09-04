import { Button, Icon } from '@/components';
import { Flex } from '@/styled-system/jsx';

export function ThreadButtons() {
  return (
    <Flex mt={2}>
      <Button variant="ghost" p={2} rounded="full">
        <Icon name="heart" fill="none" size={16} />
      </Button>
      <Button variant="ghost" p={2} rounded="full">
        <Icon name="reply" fill="none" size={16} />
      </Button>
      <Button variant="ghost" p={2} rounded="full">
        <Icon name="share" fill="none " size={16} />
      </Button>
    </Flex>
  );
}
