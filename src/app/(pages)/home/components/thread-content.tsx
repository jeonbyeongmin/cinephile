import { css } from '@/styled-system/css';

interface ThreadContentProps {
  content: string;
}

// TODO: sanitize
export function ThreadContent({ content }: ThreadContentProps) {
  return <p className={css({ h: 40, overflow: 'hidden' })} dangerouslySetInnerHTML={{ __html: content }}></p>;
}
