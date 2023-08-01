import Header from '@/app/(main)/components/Header';
import { SideBar } from '@/app/(main)/components/SideBar';
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
          <SideBar />
          {children}
        </Flex>
      </Flex>
    </div>
  );
}
