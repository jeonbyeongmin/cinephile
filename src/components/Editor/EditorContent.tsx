'use client';

import EditorMenuBar from '@/components/Editor/EditorMenuBar';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent as TiptapEditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';

export default function EditorContent() {
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
        class: 'p-3 pb-[40vh] border-gray-500 outline-none w-full h-[calc(100vh-11rem)] flex-auto overflow-y-auto',
      },
    },

    onUpdate: ({ editor }) => {
      setValue(editor?.getText() ?? '');
    },
  });

  return (
    <>
      {/* <EditorBubbleMenu editor={editor} /> */}
      <EditorMenuBar editor={editor} />
      <TiptapEditorContent className="w-full" editor={editor} />
    </>
  );
}
