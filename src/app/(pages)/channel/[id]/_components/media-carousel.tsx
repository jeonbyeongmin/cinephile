'use client';

import { Button } from '@/components';
import * as Carousel from '@/components/carousel';
import { Flex } from '@/styled-system/jsx';
import { useState } from 'react';

export function MediaCarousel() {
  const [currentContent, setCurrentContent] = useState(0);

  const onPrevClick = () => {
    setCurrentContent(currentContent - 1);
  };

  const onNextClick = () => {
    setCurrentContent(currentContent + 1);
  };

  return (
    <>
      <Carousel.Root currentContent={currentContent} onNextClick={onNextClick} onPrevClick={onPrevClick}>
        <Carousel.Content>
          <Carousel.Item>1</Carousel.Item>
          <Carousel.Item>2</Carousel.Item>
          <Carousel.Item>3</Carousel.Item>
          <Carousel.Item>4</Carousel.Item>
          <Carousel.Item>5</Carousel.Item>
          <Carousel.Item>6</Carousel.Item>
        </Carousel.Content>
      </Carousel.Root>
      <Flex justify="space-between" my={2}>
        <Button onClick={onPrevClick}>Prev</Button>
        <Button onClick={onNextClick}>Next</Button>
      </Flex>
    </>
  );
}
