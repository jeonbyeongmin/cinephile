import { Flex } from '@/components/base';

interface EditorContainerProps {
  children: React.ReactNode;
}

export default function EditorContainer({ children }: EditorContainerProps) {
  return (
    <Flex direction="col" className="max-w-[100vw] h-full w-full">
      {children}
    </Flex>
  );
}
