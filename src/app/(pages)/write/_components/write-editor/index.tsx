'use client';

import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';

import { createThread } from '@/api/threads/create-thread';
import { Button, EditorContent, EditorToolbar, Spinner } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useMutation } from '@tanstack/react-query';
import { useEditor } from '@tiptap/react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import { WriteEditorTitle } from './write-editor-title';

interface EditorProps {
  channelId: string;
}

export function WriteEditor({ channelId }: EditorProps) {
  const router = useRouter();

  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  const handleContentChange = useCallback((value: string) => {
    setContent(value);
  }, []);

  const editor = useEditor({
    content,
    extensions: [StarterKit, Placeholder.configure({ placeholder: '내용을 입력해주세요' })],
    onUpdate: ({ editor }) => {
      handleContentChange(editor?.getHTML() ?? '');
    },
    autofocus: true,
  });

  const { isLoading, mutate } = useMutation({
    mutationFn: () => createThread({ data: { title, content, channelId: Number(channelId), isExposed: true } }),
    onSuccess: () => {
      router.push(`/home?sort=hot`);
    },
  });

  return (
    <Flex direction="column" className={css({ w: 'full', h: 'full', minH: 0, flex: 1 })}>
      <EditorToolbar editor={editor} />
      <WriteEditorTitle title={title} handleTitleChange={setTitle} />
      <EditorContent editor={editor} className={css({ px: 3, overflowY: 'auto' })} />
      <Button
        mt={3}
        mx={3}
        mb={{ base: 20, md: 3 }}
        rounded="full"
        alignSelf="end"
        fontSize={{ base: 'sm', md: 'md' }}
        minW={{ base: '24', md: '28' }}
        onClick={() => mutate()}
      >
        {isLoading ? <Spinner size="xs" /> : '작성하기'}
      </Button>
    </Flex>
  );
}
