'use client';

import { Button, Icon, IconButton } from '@/components';
import { useToggle } from '@/hooks/use-toggle';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

interface WriteEditorTitleProps {
  title?: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function WriteEditorTitle({ title, handleTitleChange }: WriteEditorTitleProps) {
  const [edit, editToggle] = useToggle(false);

  const cancel = () => {
    editToggle();
  };

  return (
    <>
      {edit ? (
        <Flex className={css({ w: 'full', p: 5 })} align="center" gap={3}>
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
            onChange={handleTitleChange}
            autoFocus
          />
          <IconButton
            aria-label="dismiss button"
            rounded="md"
            p={1}
            onClick={cancel}
            icon={<Icon name="close" size={16} />}
          />
        </Flex>
      ) : (
        <Button
          variant="ghost"
          className={css({ color: 'gray.600', p: 2, m: 3, gap: 1, _hover: { bg: 'gray.800' } })}
          onClick={editToggle}
        >
          {/* <Icon name="addBox" size={24} fill="none" /> */}
          <p className={css({ fontWeight: 'bold' })}>제목 추가하기</p>
        </Button>
      )}
    </>
  );
}
