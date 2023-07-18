import { Flex, IconButton, Logo } from '@/components/base';

export default function Header() {
  return (
    <Flex className="h-16 w-full fixed px-5" align="center" justify="center">
      <Flex className="max-w-screen-lg w-full" align="center" justify="between">
        <Logo width={100} height={30} />
        <Flex className="gap-2">
          <IconButton icon="edit" />
          <IconButton icon="menu" />
        </Flex>
      </Flex>
    </Flex>
  );
}
