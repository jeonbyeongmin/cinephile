'use client';

import { Icon } from '@/components/icon';
import { IconButton } from '@/components/icon-button';
import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();

  return (
    <IconButton
      icon={<Icon name="arrowLeft" fill="none" size={20} />}
      aria-label="back button"
      variant="ghost"
      size="sm"
      rounded="full"
      onClick={router.back}
    />
  );
}
