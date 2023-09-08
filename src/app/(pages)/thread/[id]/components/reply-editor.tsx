'use client';

import { createThread } from '@/api/threads/create-thread';
import { Button, EditorContent, EditorToolbar, Spinner } from '@/components';
import { useToggle } from '@/hooks/use-toggle';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useCallback, useState } from 'react';

interface Props {
  channelId: number;
  parentId: number;
}

export function ReplyEditor({ channelId, parentId }: Props) {
  const [content, setContent] = useState('');
  const [value, toggle] = useToggle(false);

  const handleContentChange = useCallback((value: string) => {
    setContent(value);
  }, []);

  const editor = useEditor({
    content,
    extensions: [StarterKit, Placeholder.configure({ placeholder: '답변 내용을 입력해주세요' })],
    onUpdate: ({ editor }) => {
      handleContentChange(editor?.getHTML() ?? '');
    },
  });

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: () => createThread({ data: { content, channelId: Number(channelId), parentId, isExposed: value } }),
    onSuccess: () => {
      queryClient.invalidateQueries(['threads', parentId]);
      editor?.commands.clearContent();
    },
  });

  return (
    <Flex bg="gray.950" px={3} pb={3}>
      <Flex
        direction="column"
        css={{
          w: 'full',
          rounded: 'md',
          overflow: 'hidden',
          borderWidth: '1px',
          borderColor: 'gray.800',
          bg: 'gray.900',
          _focusWithin: { outline: 'focus' },
        }}
      >
        <EditorToolbar editor={editor} />
        <Flex css={{ px: 3, minH: '24' }}>
          <EditorContent editor={editor} />
        </Flex>
        <Flex align="center" justify="space-between" gap={2} css={{ p: 3 }}>
          <Flex align="center" gap={2}>
            <input
              type="checkbox"
              id="check"
              checked={value}
              onChange={toggle}
              className={css({
                appearance: 'none',
                width: '5',
                height: '5',
                p: '4px',
                borderWidth: '1px',
                borderColor: 'gray.600',
                borderRadius: 'sm',

                '&:checked': {
                  _after: {
                    content: '""',
                    display: 'block',
                    w: 'full',
                    h: 'full',
                    bg: 'gray.600',
                    borderRadius: 'xs',
                  },
                },
              })}
            />
            <label htmlFor="check" className={css({ fontSize: 'sm', color: 'gray.500' })}>
              게시글에도 올리기
            </label>
          </Flex>
          <Button size="sm" rounded="md" fontSize="sm" onClick={() => mutate()}>
            {isLoading ? <Spinner size="xs" /> : '답변등록'}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
