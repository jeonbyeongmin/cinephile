import { Button, Flex, Icon, Logo } from '@/components/base';

export default function Header() {
  return (
    <Flex className="h-16 w-full fixed px-5" align="center" justify="center">
      <Flex className="max-w-screen-lg w-full" align="center" justify="between">
        <Logo width={100} height={30} />
        <Flex className="gap-2">
          <Button className="p-2">
            <Icon name="edit" fill="none" size={16} />
          </Button>
          <Button className="p-2">
            <Icon name="menu" size={16} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
