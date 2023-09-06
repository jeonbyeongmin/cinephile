'use client';

import { threadContentStyles } from '@/app/(pages)/home/components/thread/thread-content.styles';
import { Button } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useEffect, useRef, useState } from 'react';

interface ThreadContentProps {
  title?: string;
  content: string;
}

// TODO: sanitize
export function ThreadContent({ title, content }: ThreadContentProps) {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [isLong, setIsLong] = useState(false);

  const handleMoreClick = () => {
    setIsLong(false);
  };

  useEffect(() => {
    if (contentRef.current) {
      setIsLong(contentRef.current.clientHeight > 300);
    }
  }, [content]);

  return (
    <div
      className={css({
        maxH: isLong ? { base: '44', md: '64' } : 'auto',
        overflow: 'hidden',
        fontSize: { base: 'sm', md: 'md' },
      })}
    >
      {!!title && <p className={css({ fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold', mb: 3 })}>{title}</p>}
      <p className={threadContentStyles} dangerouslySetInnerHTML={{ __html: content }} ref={contentRef} />
      {isLong && (
        <Flex
          justify="center"
          className={css({
            position: 'absolute',
            bottom: 0,
            w: 'full',
            h: 20,
            bgGradient: isLong ? 'verticalOverflow' : 'none',
          })}
          align="end"
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
