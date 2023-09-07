'use client';

import { editorStyles } from '@/app/(pages)/write/components/write-editor/editor.styles';
import { EditorToolBar } from '@/app/(pages)/write/components/write-editor/write-editor-tool-bar';
import { Flex } from '@/styled-system/jsx';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent as TiptapEditorContent, useEditor } from '@tiptap/react';
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
    <Flex bg="gray.950" px={3} py={4}>
      <Flex
        direction="column"
        css={{
          w: 'full',
          rounded: 'md',
          overflow: 'hidden',
          borderWidth: '1px',
          borderColor: 'gray.800',
          bg: 'gray.900',
          _focusWithin: {
            outline: 'focus',
            bg: 'gray.800',
          },
        }}
      >
        <EditorToolBar editor={editor} />
        <TiptapEditorContent className={editorStyles} editor={editor} />
      </Flex>
    </Flex>
  );
}
