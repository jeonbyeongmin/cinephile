'use client';

import { Button, Icon, Text } from '@/components/base';
import { Stack } from '@/styled-system/jsx';
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
    <Stack gap={1}>
      <Button variant="ghost" rounded="full" onClick={handleBackButtonClick}>
        <Icon name="arrowLeft" fill="none" size={18} />
      </Button>
      <Text weight="bold" size="lg" lineClamp={1} className="flex-1">
        {title}
      </Text>
    </Stack>
  );
}
