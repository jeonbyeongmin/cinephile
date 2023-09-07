'use client';

import { Icon, IconButton } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  threadCount: number;
}

export function ThreadPageHeader({ title, threadCount }: Props) {
  const router = useRouter();

  return (
    <Flex
      align="center"
      gap={1}
      className={css({
        position: 'sticky',
        top: 0,
        h: 16,
        borderBottomWidth: '1px',
        borderBottomColor: 'gray.800',
        backgroundColor: 'grayGlass.950',
        zIndex: 1,
        px: 2,

        '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
          backdropFilter: 'blur(8px)',
        },
      })}
    >
      <IconButton
        icon={<Icon name="arrowLeft" fill="none" size={20} />}
        aria-label="back button"
        variant="ghost"
        size="sm"
        rounded="full"
        onClick={router.back}
      />
      <Flex direction="column">
        <p className={css({ fontSize: 'md', fontWeight: 'bold' })}>{title}</p>
        <p className={css({ fontSize: 'xs', color: 'gray.400' })}>{threadCount}개의 스레드</p>
      </Flex>
    </Flex>
  );
}
