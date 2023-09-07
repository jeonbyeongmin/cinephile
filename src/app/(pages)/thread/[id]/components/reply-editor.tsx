'use client';

import { Button, EditorContent, EditorToolbar } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useCallback, useState } from 'react';

export function ReplyEditor() {
  const [content, setContent] = useState('');

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

  return (
    <Flex bg="gray.950" px={3} pb={4}>
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
          <Button size="sm" rounded="md">
            답변하기
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
