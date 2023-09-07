'use client';

import { editorStyles } from '@/app/(pages)/write/components/write-editor/editor.styles';
import { WriteEditorTitle } from '@/app/(pages)/write/components/write-editor/write-editor-title';
import { EditorToolBar } from '@/app/(pages)/write/components/write-editor/write-editor-tool-bar';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent as TiptapEditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface EditorProps {
  content: string;
  handleContentChange: (value: string) => void;
}

export function WriteEditor({ content, handleContentChange }: EditorProps) {
  const editor = useEditor({
    content,
    extensions: [StarterKit, Placeholder.configure({ placeholder: '내용을 입력해주세요' })],
    onUpdate: ({ editor }) => {
      handleContentChange(editor?.getHTML() ?? '');
    },
  });

  return (
    <Flex
      direction="column"
      className={css({ w: 'full', h: 'full', minH: 0, flex: 1, _focusWithin: { bg: 'gray.900' } })}
    >
      <EditorToolBar editor={editor} />
      <WriteEditorTitle />
      <Flex
        direction="column"
        className={css({
          minH: 0,
          h: 'full',
          flex: 1,
          overflowY: 'auto',
          px: 3,
          pb: '40vh',
          mb: 4,
        })}
      >
        <TiptapEditorContent className={editorStyles} editor={editor} />
      </Flex>
    </Flex>
  );
}
