'use client';

import EditorBubbleMenu from '@/components/Editor/EditorBubbleMenu';
import EditorMenuBar from '@/components/Editor/EditorMenuBar';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';

const Editor = () => {
  const [value, setValue] = useState('sdfasd');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Placeholder.configure({
        placeholder: '내용을 입력하세요',
        emptyNodeClass:
          'first:before:text-gray-400 first:before:float-left first:before:content-[attr(data-placeholder)]',
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: 'p-3 border-gray-500 bg-gray-900 rounded-sm',
      },
    },
    onUpdate: ({ editor }) => {
      setValue(editor?.getText() ?? '');
    },
  });

  return (
    <>
      <EditorBubbleMenu editor={editor} />
      <EditorMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Editor;
