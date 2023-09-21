import sanitizeHtml from 'sanitize-html';

interface Props {
  content: string;
  className?: string;
  contentRef?: (node: HTMLParagraphElement) => void;
}

export const SanitizedContent = ({ content, className, contentRef }: Props) => {
  return <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} ref={contentRef} className={className} />;
};
