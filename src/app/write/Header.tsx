'use client';

import { Button, Flex, Icon, Text } from '@/components/base';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
}

export function WritePageHeader({ title }: Props) {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <Flex className="border-b h-[4rem] border-gray-700 w-full py-3 px-1" align="center" gap={1}>
      <Button variant="ghost" radius="full" className="p-2" onClick={handleBackButtonClick}>
        <Icon name="arrowLeft" fill="none" size={18} />
      </Button>
      <Text weight="bold" size="lg" lineClamp={1} className="flex-1">
        {title}
      </Text>
    </Flex>
  );
}