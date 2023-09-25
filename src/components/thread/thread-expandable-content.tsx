'use client';

import { Button } from '@/components/button';
import { ThreadContent } from '@/components/thread/thread-content';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useCallback, useState } from 'react';

interface Props {
  content: string;
}

export function ThreadExpandableContent({ content }: Props) {
  const [isLong, setIsLong] = useState(false);

  const handleMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLong(false);
  };

  const contentRef = useCallback((node: HTMLParagraphElement) => {
    if (node !== null) {
      setIsLong(node.clientHeight >= 208);
    }
  }, []);

  return (
    <>
      <ThreadContent
        className={css({ maxH: isLong ? 52 : 'auto', overflow: 'hidden' })}
        content={content}
        contentRef={contentRef}
      />
      {isLong && (
        <Flex
          justify="center"
          align="end"
          className={css({ position: 'absolute', bottom: 0, w: 'full', h: 20, bgGradient: 'verticalOverflow' })}
        >
          <Button
            variant="outline"
            rounded="full"
            size="sm"
            color="gray.300!"
            onClick={handleMoreClick}
            fontSize={{ base: 'xs', md: 'sm' }}
          >
            더보기
          </Button>
        </Flex>
      )}
    </>
  );
}
