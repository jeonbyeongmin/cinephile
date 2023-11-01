'use client';

import { Icon } from '@/components/primitive/icon';
import { IconButton } from '@/components/primitive/icon-button';
import { useRouter } from 'next/navigation';

export function Back() {
  const router = useRouter();

  return (
    <IconButton
      icon={<Icon name="chevronLeft" fill="none" size={20} />}
      aria-label="back button"
      variant="ghost"
      size="sm"
      rounded="full"
      onClick={router.back}
    />
  );
}
