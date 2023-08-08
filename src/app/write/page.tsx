import Editor from '@/components/Editor';
import { Button, Flex, Icon, Text } from '@/components/base';

export default function WritePage() {
  return (
    <Flex direction="col" className="w-full h-full relative">
      <Flex direction="col" className="min-h-0 flex-1 w-full">
        <Flex className="border-b h-[4rem] border-gray-700 w-full py-3 px-1" align="center" gap={2}>
          <Button variant="ghost" radius="full" className="p-2">
            <Icon name="arrowLeft" fill="none" size={18} />
          </Button>
          <Text weight="bold" size="lg" lineClamp={1} className="flex-1">
            애브리씽 애브리웨어 올 앳 원스
          </Text>
          <Button variant="ghost" radius="full" className="p-2">
            <Icon name="change" fill="none" size={18} />
          </Button>
        </Flex>

        <Editor />
      </Flex>
      <Flex className="border-t bg-gray-950 border-gray-700 w-full h-[4rem] p-3" align="center" justify="end" gap={2}>
        <Button variant="ghost" radius="lg" className="w-20 h-full">
          임시저장
        </Button>
        <Button variant="solid" radius="lg" className="w-20 h-full">
          발행하기
        </Button>
      </Flex>
    </Flex>
  );
}
