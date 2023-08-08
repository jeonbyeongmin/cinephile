'use client';

import EditorToolBar from '@/components/Editor/EditorToolBar';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent as TiptapEditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';
import editorStyles from './editor.module.css';

const sample = `
  <p>안녕하세요. 이 문장은 평문입니다.</p>
  <p><strike>안녕하세요. 이 문장은 취소선이 적용된 모습입니다.</strike></p>
  <p><em>안녕하세요. 이 문장은 기울림체가 적용된 모습입니다.</em></p>
  <p><strong>안녕하세요. 이 문장은 볼드체가 적용된 모습입니다.</strong></p>
  <hr>
  <ol>
    <li>안녕하세요. 숫자형 리스트 첫 번째 문장입니다.</li>
    <li>안녕하세요. 숫자형 리스트 두 번째 문장입니다.</li>
    <li>안녕하세요. 숫자형 리스트 세 번째 문장입니다.</li>
  </ol>
  <ul>
    <li>안녕하세요. 불릿형 리스트 첫 번째 문장입니다.</li>
    <li>안녕하세요. 불릿형 리스트 두 번째 문장입니다.</li>
    <li>안녕하세요. 불릿형 리스트 세 번째 문장입니다.</li>
  </ul>
  
  <p>안녕하세요. 이 문장은 평문입니다.</p>
  <p><strike>안녕하세요. 이 문장은 취소선이 적용된 모습입니다.</strike></p>
  <p><em>안녕하세요. 이 문장은 기울림체가 적용된 모습입니다.</em></p>
  <p><strong>안녕하세요. 이 문장은 볼드체가 적용된 모습입니다.</strong></p>

  <blockquote><p>안녕하세요. 여기는 인용구(blockquote) 입니다.</p><p>커스텀 인용 컴포넌트와는 다릅니다.</p><p>안녕하세요. 이 문장은 평문입니다.</p><p><s>안녕하세요. 이 문장은 취소선이 적용된 모습입니다.</s></p><p><em>안녕하세요. 이 문장은 기울림체가 적용된 모습입니다.</em></p><p><strong>안녕하세요. 이 문장은 볼드체가 적용된 모습입니다.</strong></p></blockquote>
`;

export default function Editor() {
  const [value, setValue] = useState(sample);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Placeholder.configure({
        placeholder: '내용을 입력하세요',
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: 'px-3 pb-[40vh] pt-2 relative flex-1 border-gray-500 outline-none w-full h-full overflow-y-scroll',
      },
    },

    onUpdate: ({ editor }) => {
      setValue(editor?.getText() ?? '');
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
