'use client';

import { threadContentStyles } from '@/app/(pages)/home/components/thread/thread-content.styles';
import { Button } from '@/components';
import { useIsMounted } from '@/hooks';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useEffect, useRef, useState } from 'react';
import sanitizeHtml from 'sanitize-html';

interface ThreadContentProps {
  title?: string;
  content: string;
}

export function ThreadContent({ title, content }: ThreadContentProps) {
  const isMounted = useIsMounted();
  const [isLong, setIsLong] = useState(false);

  const handleMoreClick = () => {
    setIsLong(false);
  };

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setIsLong(contentRef.current.clientHeight >= 208);
    }
  }, [content]);

  return (
    <div
      className={css({
        maxH: !isMounted || isLong ? 52 : 'auto',
        overflow: 'hidden',
        fontSize: { base: 'sm', md: 'md' },
      })}
      ref={contentRef}
    >
      {!!title && <p className={css({ fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold', mb: 3 })}>{title}</p>}
      <p className={threadContentStyles} dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} />
      {isLong && (
        <Flex
          justify="center"
          align="end"
          className={css({ position: 'absolute', bottom: 0, w: 'full', h: 20, bgGradient: 'verticalOverflow' })}
        >
          <Button
            variant="solid"
            rounded="full"
            size="sm"
            minW={16}
            mb={1}
            borderWidth={1}
            borderColor="gray.700"
            color="gray.300!"
            onClick={handleMoreClick}
            fontSize={{ base: 'xs', md: 'sm' }}
          >
            더보기
          </Button>
        </Flex>
      )}
    </div>
  );
}
