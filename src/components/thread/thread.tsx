import { Flex } from '@/styled-system/jsx';
import { ThreadBody } from './thread-body';
import { ThreadContent } from './thread-content';
import { ThreadExpandableContent } from './thread-expandable-content';
import { ThreadFooter } from './thread-footer';
import { ThreadHeader } from './thread-header';

interface ThreadProps {
  children: React.ReactNode;
}

export function Thread({ children }: ThreadProps) {
  return (
    <Flex direction="column" bg="gray.950" px={3} py={4}>
      {children}
    </Flex>
  );
}

Thread.Header = ThreadHeader;
Thread.Body = ThreadBody;
Thread.Footer = ThreadFooter;
Thread.Content = ThreadContent;
Thread.ExpandableContent = ThreadExpandableContent;
