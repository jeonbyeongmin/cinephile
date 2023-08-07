'use client';

import { Button, Text } from '@/components/base';
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
      <Button
        variant="ghost"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <Text>굵게</Text>
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        Italic
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        Strike
      </Button>
    </BubbleMenu>
  );
}
