'use client';

import EditorToolBar from '@/components/Editor/EditorToolBar';
import editorStyles from '@/styles/editor.module.css';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent as TiptapEditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface EditorProps {
  content: string;
  handleContentChange: (value: string) => void;
}

export default function Editor({ content, handleContentChange }: EditorProps) {
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
        class: 'px-3 pb-[40vh] pt-2 relative flex-1 border-gray-500 outline-none w-full h-full overflow-y-scroll',
      },
    },

    onUpdate: ({ editor }) => {
      handleContentChange(editor?.getHTML() ?? '');
    },

    autofocus: true,
  });

  return (
    <>
      {/* <EditorBubbleMenu editor={editor} /> */}
      <EditorToolBar editor={editor} />
      <TiptapEditorContent className={editorStyles.editor} editor={editor} />
    </>
  );
}
