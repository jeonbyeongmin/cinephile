'use client';

import EditorToolBar from '@/app/(pages)/write/components/write-editor/write-editor-tool-bar';
import { css } from '@/styled-system/css';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent as TiptapEditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface EditorProps {
  content: string;
  handleContentChange: (value: string) => void;
}

export default function WriteEditor({ content, handleContentChange }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: '내용을 입력하세요',
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: css({
          px: 5,
          py: 5,
          pb: '50vh',
          position: 'relative',
          flex: 1,
          h: 'full',
          overflowY: 'auto',
          outline: 'none',
          _focus: { bg: 'gray.900' },
        }),
      },
    },

    onUpdate: ({ editor }) => {
      handleContentChange(editor?.getHTML() ?? '');
    },

    autofocus: true,
  });

  return (
    <>
      <EditorToolBar editor={editor} />
      <TiptapEditorContent className={css({ flex: 1, h: 'full', minH: 0 })} editor={editor} />
    </>
  );
}
