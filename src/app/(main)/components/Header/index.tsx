import { Avatar, Flex, Logo } from '@/components/base';
import Link from 'next/link';

export default function Header() {
  return (
    <Flex className="h-16 w-full fixed px-5 z-10" align="center" justify="center">
      <Flex className="max-w-screen-lg w-full" align="center" justify="between">
        <Link href="/">
          <Logo width={100} height={30} />
        </Link>
        <button>
          <Avatar />
        </button>
      </Flex>
    </Flex>
  );
}
