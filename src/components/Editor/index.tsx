import EditorContent from '@/components/Editor/EditorContent';
import { Flex } from '@/components/base';

export default function Editor() {
  return (
    <Flex direction="col" className="max-w-[100vw] h-full w-full">
      <EditorContent />
    </Flex>
  );
}
