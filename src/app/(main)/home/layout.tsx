import { Flex } from '@/components/base';

interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <Flex className="relative w-full h-full" justify="center">
      <Flex className="h-full max-w-screen-xl p-5">
        <div className="bg-slate-200 w-72 h-full hidden md:block mt-10 sticky"></div>
        {children}
      </Flex>
    </Flex>
  );
}
