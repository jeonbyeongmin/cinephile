import { Button, Flex, Icon } from '@/components/base';

export function ThreadButtons() {
  return (
    <Flex direction="row">
      <Button variant="ghost" className="p-2" radius="full">
        <Icon name="heart" fill="none" size={20} />
      </Button>
      <Button variant="ghost" className="p-2" radius="full">
        <Icon name="reply" fill="none" size={20} />
      </Button>
      <Button variant="ghost" className="p-2" radius="full">
        <Icon name="share" fill="none " size={20} />
      </Button>
    </Flex>
  );
}
