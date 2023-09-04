import { Button, Icon } from '@/components';
import { Divider, Flex } from '@/styled-system/jsx';
import { type Editor } from '@tiptap/react';

interface Props {
  editor: Editor | null;
}

export function EditorToolBar({ editor }: Props) {
  return (
    <Flex align="center" p={2} w="full">
      <Flex>
        <Button
          variant="ghost"
          onClick={() => editor?.chain().focus().undo().run()}
          disabled={!editor?.can().chain().focus().undo().run()}
          p={1}
          rounded="sm"
        >
          <Icon name="undo" size={22} />
        </Button>
        <Button
          variant="ghost"
          onClick={() => editor?.chain().focus().redo().run()}
          disabled={!editor?.can().chain().focus().redo().run()}
          p={1}
          rounded="sm"
        >
          <Icon name="redo" size={22} />
        </Button>
      </Flex>

      <Divider color="gray.600" orientation="vertical" h="5" mx={2} />

      <Flex>
        <Button
          variant={editor?.isActive('bold') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleBold().run()}
          disabled={!editor?.can().chain().focus().toggleBold().run()}
          p={1}
          rounded="sm"
        >
          <Icon name="bold" size={22} />
        </Button>
        <Button
          variant={editor?.isActive('italic') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          disabled={!editor?.can().chain().focus().toggleItalic().run()}
          p={1}
          rounded="sm"
        >
          <Icon name="italic" size={22} />
        </Button>
        <Button
          variant={editor?.isActive('strike') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          disabled={!editor?.can().chain().focus().toggleStrike().run()}
          p={1}
          rounded="sm"
        >
          <Icon name="strike" size={22} />
        </Button>
      </Flex>

      <Divider color="gray.600" orientation="vertical" h="5" mx={2} />

      <Flex>
        <Button
          variant={editor?.isActive('bulletList') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          disabled={!editor?.can().chain().focus().toggleBulletList().run()}
          p={1}
          rounded="sm"
        >
          <Icon name="bulletList" size={22} />
        </Button>
        <Button
          variant={editor?.isActive('orderedList') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          disabled={!editor?.can().chain().focus().toggleOrderedList().run()}
          p={1}
          rounded="sm"
        >
          <Icon name="orderedList" size={22} />
        </Button>
      </Flex>

      <Divider color="gray.600" orientation="vertical" h="5" mx={2} />

      <Flex>
        <Button
          variant={editor?.isActive('blockquote') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
          disabled={!editor?.can().chain().focus().toggleBlockquote().run()}
          p={1}
          rounded="sm"
        >
          <Icon name="blockquote" size={22} />
        </Button>
        <Button
          variant="ghost"
          onClick={() => editor?.chain().focus().setHorizontalRule().run()}
          disabled={!editor?.can().chain().focus().setHorizontalRule().run()}
          p={1}
          rounded="sm"
        >
          <Icon name="horizontalRule" size={22} />
        </Button>
      </Flex>
    </Flex>
  );
}
