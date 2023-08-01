import Header from '@/app/(main)/components/Header';
import { NavBar } from '@/app/(main)/components/NavBar';
import { Flex } from '@/components/base';

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="h-full">
      <Header />
      <Flex className="w-full px-5" justify="center">
        <Flex className="max-w-screen-xl" gap={5}>
          <NavBar />
          {children}
          <div className="w-80 hidden lg:block bg-gray-900 h-[100vh] sticky top-0" />
        </Flex>
      </Flex>
    </div>
  );
}
