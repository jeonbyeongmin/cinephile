'use client';

import { BubbleMenu, type Editor } from '@tiptap/react';

interface EditorBubbleMenuProps {
  editor: Editor | null;
}

export default function EditorBubbleMenu({ editor }: EditorBubbleMenuProps) {
  if (!editor) {
    return null;
  }

  return (
    <BubbleMenu
      className="bubble-menu bg-gray-800 p-2"
      shouldShow={({ state }) => {
        return state.selection.content().size > 0;
      }}
      tippyOptions={{ duration: 100 }}
      editor={editor}
    >
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        Strike
      </button>
    </BubbleMenu>
  );
}
