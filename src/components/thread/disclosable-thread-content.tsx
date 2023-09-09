'use client';

import { Button, SanitizedContent } from '@/components';
import { useIsMounted } from '@/hooks';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useEffect, useRef, useState } from 'react';

interface Props {
  content: string;
}

export function DisclosableThreadContent({ content }: Props) {
  const isMounted = useIsMounted();
  const [isLong, setIsLong] = useState(false);

  const handleMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLong(false);
  };

  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setIsLong(contentRef.current.clientHeight >= 208);
    }
  }, [content]);

  return (
    <>
      <SanitizedContent
        className={css({ maxH: !isMounted || isLong ? 52 : 'auto', overflow: 'hidden' })}
        content={content}
        ref={contentRef}
      />
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
    </>
  );
}
