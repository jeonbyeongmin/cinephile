'use client';

import { Button, SanitizedContent } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useCallback, useState } from 'react';

interface Props {
  content: string;
}

export function DisclosableThreadContent({ content }: Props) {
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
      <SanitizedContent
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
