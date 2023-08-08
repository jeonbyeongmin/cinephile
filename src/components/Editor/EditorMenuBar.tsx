import { Button, Flex, Icon } from '@/components/base';
import { type Editor } from '@tiptap/react';

interface Props {
  editor: Editor | null;
}

export default function EditorMenuBar({ editor }: Props) {
  if (!editor) {
    return null;
  }

  return (
    <Flex align="center" className="w-full h-12 p-2 overflow-x-hidden">
      <Flex gap={1}>
        <Button
          variant="ghost"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className="p-1"
          radius="sm"
        >
          <Icon name="undo" size={22} />
        </Button>
        <Button
          variant="ghost"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className="p-1"
          radius="sm"
        >
          <Icon name="redo" size={22} />
        </Button>
      </Flex>

      <div className="h-4 w-[1px] bg-gray-700 mx-2 rounded-full" />

      <Flex gap={1}>
        <Button
          variant={editor.isActive('bold') ? 'solid' : 'ghost'}
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className="p-1"
          radius="sm"
        >
          <Icon name="bold" size={22} />
        </Button>
        <Button
          variant={editor.isActive('italic') ? 'solid' : 'ghost'}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className="p-1"
          radius="sm"
        >
          <Icon name="italic" size={22} />
        </Button>
        <Button
          variant={editor.isActive('strike') ? 'solid' : 'ghost'}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className="p-1"
          radius="sm"
        >
          <Icon name="strike" size={22} />
        </Button>
      </Flex>

      <div className="h-4 w-[1px] bg-gray-700 mx-2 rounded-full" />

      <Flex gap={1}>
        <Button
          variant={editor.isActive('bulletList') ? 'solid' : 'ghost'}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
          className="p-1"
          radius="sm"
        >
          <Icon name="bulletList" size={22} />
        </Button>
        <Button
          variant={editor.isActive('orderedList') ? 'solid' : 'ghost'}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          disabled={!editor.can().chain().focus().toggleOrderedList().run()}
          className="p-1"
          radius="sm"
        >
          <Icon name="orderedList" size={22} />
        </Button>
      </Flex>

      <div className="h-4 w-[1px] bg-gray-700 mx-2 rounded-full" />

      <Flex gap={1}>
        <Button
          variant={editor.isActive('blockquote') ? 'solid' : 'ghost'}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          disabled={!editor.can().chain().focus().toggleBlockquote().run()}
          className="p-1"
          radius="sm"
        >
          <Icon name="blockquote" size={22} />
        </Button>
        <Button
          variant="ghost"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          disabled={!editor.can().chain().focus().setHorizontalRule().run()}
          className="p-1"
          radius="sm"
        >
          <Icon name="horizontalRule" size={22} />
        </Button>
      </Flex>
    </Flex>
  );
}
