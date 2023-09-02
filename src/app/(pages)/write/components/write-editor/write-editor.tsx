'use client';

import { editorStyles } from '@/app/(pages)/write/components/write-editor/editor.styles';
import { EditorToolBar } from '@/app/(pages)/write/components/write-editor/write-editor-tool-bar';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent as TiptapEditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface EditorProps {
  content: string;
  handleContentChange: (value: string) => void;
}

// TODO: 옵셔널 타이틀 추가
// TODO: 스크롤 쇼/하이드
// TODO: UI 구체화 - 상단 페이드인
export function WriteEditor({ content, handleContentChange }: EditorProps) {
  const editor = useEditor({
    content,
    extensions: [StarterKit, Placeholder.configure({ placeholder: '내용을 입력해주세요' })],
    onUpdate: ({ editor }) => {
      handleContentChange(editor?.getHTML() ?? '');
    },
  });

  return (
    <>
      <EditorToolBar editor={editor} />
      <TiptapEditorContent className={editorStyles} editor={editor} />
    </>
  );
}
