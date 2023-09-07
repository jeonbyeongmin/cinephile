import sanitizeHtml from 'sanitize-html';

interface Props {
  content: string;
}

export function ThreadContent({ content }: Props) {
  return <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} />;
}
