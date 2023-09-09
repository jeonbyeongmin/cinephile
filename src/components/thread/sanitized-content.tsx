import { forwardRef } from 'react';
import sanitizeHtml from 'sanitize-html';

interface Props {
  content: string;
  className?: string;
}

export const SanitizedContent = forwardRef<HTMLParagraphElement, Props>((props, ref) => {
  const { content, className } = props;
  return <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} ref={ref} className={className} />;
});

SanitizedContent.displayName = 'SanitizedContent';
