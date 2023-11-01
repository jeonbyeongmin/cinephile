'use client';

import { Icon, IconButton } from '@/components/primitive';
import { Divider, Flex } from '@/styled-system/jsx';
import { type Editor } from '@tiptap/react';

interface Props {
  editor: Editor | null;
}

export function EditorToolbar({ editor }: Props) {
  return (
    <Flex align="center" p={2} w="full" overflowX="auto" scrollbarWidth="none">
      <Flex>
        <IconButton
          aria-label="undo button"
          variant="ghost"
          onClick={() => editor?.chain().focus().undo().run()}
          disabled={!editor?.can().chain().focus().undo().run()}
          size="xs"
          rounded="sm"
          icon={<Icon name="undo" />}
          css={{
            maxW: '8',
            maxH: '8',
          }}
        />
        <IconButton
          aria-label="redo button"
          variant="ghost"
          onClick={() => editor?.chain().focus().redo().run()}
          disabled={!editor?.can().chain().focus().redo().run()}
          size="xs"
          rounded="sm"
          icon={<Icon name="redo" />}
          css={{
            maxW: '8',
            maxH: '8',
          }}
        />
      </Flex>

      <Divider color="gray.600" orientation="vertical" h="5" mx={2} />

      <Flex>
        <IconButton
          aria-label="bold button"
          variant={editor?.isActive('bold') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleBold().run()}
          disabled={!editor?.can().chain().focus().toggleBold().run()}
          size="xs"
          rounded="sm"
          icon={<Icon name="bold" />}
          css={{
            maxW: '8',
            maxH: '8',
          }}
        />
        <IconButton
          aria-label="italic button"
          variant={editor?.isActive('italic') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          disabled={!editor?.can().chain().focus().toggleItalic().run()}
          size="xs"
          rounded="sm"
          icon={<Icon name="italic" />}
          css={{
            maxW: '8',
            maxH: '8',
          }}
        />
        <IconButton
          aria-label="underline button"
          variant={editor?.isActive('strike') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          disabled={!editor?.can().chain().focus().toggleStrike().run()}
          size="xs"
          rounded="sm"
          icon={<Icon name="strike" />}
          css={{
            maxW: '8',
            maxH: '8',
          }}
        />
      </Flex>

      <Divider color="gray.600" orientation="vertical" h="5" mx={2} />

      <Flex>
        <IconButton
          aria-label="bullet list button"
          variant={editor?.isActive('bulletList') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          disabled={!editor?.can().chain().focus().toggleBulletList().run()}
          size="xs"
          rounded="sm"
          icon={<Icon name="bulletList" />}
          css={{
            maxW: '8',
            maxH: '8',
          }}
        />
        <IconButton
          aria-label="ordered list button"
          variant={editor?.isActive('orderedList') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          disabled={!editor?.can().chain().focus().toggleOrderedList().run()}
          size="xs"
          rounded="sm"
          icon={<Icon name="orderedList" />}
          css={{
            maxW: '8',
            maxH: '8',
          }}
        />
      </Flex>

      <Divider color="gray.600" orientation="vertical" h="5" mx={2} />

      <Flex>
        <IconButton
          aria-label="blockquote button"
          variant={editor?.isActive('blockquote') ? 'solid' : 'ghost'}
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
          disabled={!editor?.can().chain().focus().toggleBlockquote().run()}
          size="xs"
          rounded="sm"
          icon={<Icon name="blockquote" />}
          css={{
            maxW: '8',
            maxH: '8',
          }}
        />
      </Flex>
    </Flex>
  );
}
