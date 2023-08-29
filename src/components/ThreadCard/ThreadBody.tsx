import editorStyles from '@/styles/editor.module.css';
import classNames from 'classnames';

interface Props {
  content: string;
  navigateTo?: string;
}

// TODO: sanitize html
export function ThreadBody({ content, navigateTo }: Props) {
  return (
    <div
      className={classNames('text-sm flex-1 md:text-base text-gray-200 line-clamp-4 break-all', editorStyles.editor)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
