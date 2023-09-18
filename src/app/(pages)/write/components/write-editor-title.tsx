'use client';

import { Button, Icon, IconButton } from '@/components';
import { useToggle } from '@/hooks/use-toggle';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

interface WriteEditorTitleProps {
  title?: string;
  handleTitleChange: (value: string) => void;
}

export function WriteEditorTitle({ title, handleTitleChange }: WriteEditorTitleProps) {
  const [edit, excuteEditToggle] = useToggle(false);

  const cancel = () => {
    excuteEditToggle();
    handleTitleChange('');
  };

  return (
    <Flex className={css({ w: 'full', py: 5, px: 3 })} align="center" gap={3}>
      {edit ? (
        <>
          <input
            className={css({
              bg: 'transparent',
              outline: 'none',
              color: 'gray.50',
              flex: 1,
              fontSize: 'lg',
              fontWeight: 'bold',
              _placeholder: { color: 'gray.600' },
            })}
            value={title}
            placeholder="제목을 입력하세요."
            onChange={e => handleTitleChange(e.target.value)}
            autoFocus
          />
          <IconButton
            aria-label="dismiss button"
            rounded="md"
            size="xs"
            color="gray.400"
            onClick={cancel}
            icon={<Icon name="close" size={14} />}
          />
        </>
      ) : (
        <Button
          onClick={excuteEditToggle}
          variant="link"
          leftElement={<Icon name="addBox" size={20} fill="none" />}
          rounded="md"
          color="gray.500"
          fontWeight="bold"
          fontSize={{ base: 'md', md: 'lg' }}
          p="0!"
        >
          제목 추가하기
        </Button>
      )}
    </Flex>
  );
}
