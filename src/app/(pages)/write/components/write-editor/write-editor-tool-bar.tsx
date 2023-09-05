import { Icon, IconButton } from '@/components';
import { Divider, Flex } from '@/styled-system/jsx';
import { type Editor } from '@tiptap/react';

interface Props {
  editor: Editor | null;
}

export function EditorToolBar({ editor }: Props) {
  return (
    <Flex align="center" p={2} w="full">
      <Flex>
        <IconButton
          aria-label="undo button"
          variant="ghost"
          onClick={() => editor?.chain().focus().undo().run()}
          disabled={!editor?.can().chain().focus().undo().run()}
          p={1}
          rounded="sm"
          icon={<Icon name="undo" size={22} />}
        />
        <IconButton
          aria-label="redo button"
          variant="ghost"
          onClick={() => editor?.chain().focus().redo().run()}
          disabled={!editor?.can().chain().focus().redo().run()}
          p={1}
          rounded="sm"
          icon={<Icon name="redo" size={22} />}
        />
      </Flex>

      <Divider color="gray.600" orientation="vertical" h="5" mx={2} />

      <Flex>
        <IconButton
          aria-label="bold button"
          variant={editor?.isActive('bold') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleBold().run()}
          disabled={!editor?.can().chain().focus().toggleBold().run()}
          p={1}
          rounded="sm"
          icon={<Icon name="bold" size={22} />}
        />
        <IconButton
          aria-label="italic button"
          variant={editor?.isActive('italic') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          disabled={!editor?.can().chain().focus().toggleItalic().run()}
          p={1}
          rounded="sm"
          icon={<Icon name="italic" size={22} />}
        />
        <IconButton
          aria-label="underline button"
          variant={editor?.isActive('strike') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          disabled={!editor?.can().chain().focus().toggleStrike().run()}
          p={1}
          rounded="sm"
          icon={<Icon name="strike" size={22} />}
        />
      </Flex>

      <Divider color="gray.600" orientation="vertical" h="5" mx={2} />

      <Flex>
        <IconButton
          aria-label="bullet list button"
          variant={editor?.isActive('bulletList') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          disabled={!editor?.can().chain().focus().toggleBulletList().run()}
          p={1}
          rounded="sm"
          icon={<Icon name="bulletList" size={22} />}
        />
        <IconButton
          aria-label="ordered list button"
          variant={editor?.isActive('orderedList') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          disabled={!editor?.can().chain().focus().toggleOrderedList().run()}
          p={1}
          rounded="sm"
          icon={<Icon name="orderedList" size={22} />}
        />
      </Flex>

      <Divider color="gray.600" orientation="vertical" h="5" mx={2} />

      <Flex>
        <IconButton
          aria-label="blockquote button"
          variant={editor?.isActive('blockquote') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
          disabled={!editor?.can().chain().focus().toggleBlockquote().run()}
          p={1}
          rounded="sm"
          icon={<Icon name="blockquote" size={22} />}
        />
      </Flex>
    </Flex>
  );
}
