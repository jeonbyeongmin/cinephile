import { Button, Flex, Icon } from '@/components/base';
import { type Editor } from '@tiptap/react';
import classNames from 'classnames';

interface Props {
  editor: Editor | null;
}

export default function EditorMenuBar({ editor }: Props) {
  if (!editor) {
    return null;
  }

  return (
    <Flex align="center">
      <Button
        variant="ghost"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={classNames(editor.isActive('bold') ? 'is-active' : '', 'p-1')}
        radius="sm"
      >
        <Icon name="undo" size={16} />
      </Button>
      <Button
        variant="ghost"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={classNames(editor.isActive('bold') ? 'is-active' : '', 'p-1')}
        radius="sm"
      >
        <Icon name="redo" size={16} />
      </Button>

      {/*  */}

      <Button
        variant="ghost"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={classNames(editor.isActive('bold') ? 'is-active' : '', 'p-1')}
        radius="sm"
      >
        <Icon name="bold" size={16} />
      </Button>
      <Button
        variant="ghost"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={classNames(editor.isActive('bold') ? 'is-active' : '', 'p-1')}
        radius="sm"
      >
        <Icon name="italic" size={16} />
      </Button>
      <Button
        variant="ghost"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={classNames(editor.isActive('bold') ? 'is-active' : '', 'p-1')}
        radius="sm"
      >
        <Icon name="strike" size={16} />
      </Button>

      {/*  */}

      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </Button>
      <Button
        variant="ghost"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        className={classNames(editor.isActive('bold') ? 'is-active' : '', 'p-1')}
        radius="sm"
      >
        <Icon name="bulletList" size={16} />
      </Button>
      <Button
        variant="ghost"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        className={classNames(editor.isActive('bold') ? 'is-active' : '', 'p-1')}
        radius="sm"
      >
        <Icon name="orderedList" size={16} />
      </Button>
      <Button
        variant="ghost"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
        className={classNames(editor.isActive('bold') ? 'is-active' : '', 'p-1')}
        radius="sm"
      >
        <Icon name="blockquote" size={16} />
      </Button>
      <Button
        variant="ghost"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        disabled={!editor.can().chain().focus().setHorizontalRule().run()}
        className={classNames(editor.isActive('bold') ? 'is-active' : '', 'p-1')}
        radius="sm"
      >
        <Icon name="horizontalRule" size={16} />
      </Button>
    </Flex>
  );
}
