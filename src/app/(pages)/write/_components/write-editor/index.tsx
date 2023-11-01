'use client';

import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';

import { createThread } from '@/api/threads/create-thread';
import { Button, EditorContent, EditorToolbar, Spinner } from '@/components/primitive';
import { css, cx } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useMutation } from '@tanstack/react-query';
import { useEditor } from '@tiptap/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { flex } from '@/styled-system/patterns';
import { WriteEditorTitle } from './write-editor-title';

interface EditorProps {
  channelId: string;
}

const extensions = [StarterKit, Placeholder.configure({ placeholder: '내용을 입력해주세요' })];

export function WriteEditor({ channelId }: EditorProps) {
  const router = useRouter();

  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  const currentEditor = useEditor({
    content,
    extensions,
    autofocus: true,
    onUpdate: ({ editor }) => {
      const isValid = editor.getText().trim() !== '';
      const content = isValid ? editor.getHTML() : '';
      setContent(content);
    },
  });

  const { isLoading, mutate } = useMutation({
    mutationFn: () => createThread({ data: { title, content, channelId: Number(channelId), isExposed: true } }),
    onSuccess: () => {
      router.push(`/home?sort=hot`);
    },
    onError: (error: Error) => {
      setError(error.message);
    },
  });

  return (
    <Flex direction="column" className={css({ w: 'full', h: 'full', minH: 0, flex: 1 })}>
      <EditorToolbar editor={currentEditor} />
      <WriteEditorTitle title={title} handleTitleChange={setTitle} />
      <EditorContent editor={currentEditor} className={css({ px: 3, overflowY: 'auto' })} />
      <div
        className={cx(
          flex({ alignSelf: 'end', alignItems: 'center', gap: 3 }),
          css({ mt: 3, mx: 3, mb: { base: 20, md: 3 } })
        )}
      >
        <span className={css({ color: 'red.500', fontSize: 'sm', ml: 3 })}>{error}</span>
        <Button
          rounded="full"
          fontSize={{ base: 'sm', md: 'md' }}
          minW={{ base: '24', md: '28' }}
          h={{ base: '10', md: '11' }}
          onClick={() => mutate()}
        >
          {isLoading ? <Spinner size="xs" /> : '작성하기'}
        </Button>
      </div>
    </Flex>
  );
}
