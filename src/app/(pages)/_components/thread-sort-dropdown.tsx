'use client';

import * as Dropdown from '@/components/dropdown';

import { Icon } from '@/components';
import { buttonRecipe } from '@/components/button/recipe';
import { css, cx } from '@/styled-system/css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const itemList = [
  { label: '반응순', value: 'hot' },
  { label: '최신순', value: 'new' },
];

export type ThreadSortValue = 'new' | 'hot';

interface ThreadSortDropdownProps {
  value: ThreadSortValue;
  keyName?: string;
  scrollToTop?: boolean;
  className?: string;
}

export function ThreadSortDropdown(props: ThreadSortDropdownProps) {
  const { value, keyName = 'sort', scrollToTop = true, className } = props;

  const router = useRouter();
  const [open, setOpen] = useState(false);

  const currentLabel = itemList.find(item => item.value === value)?.label;

  const routeTo = (value: string) => {
    router.push(`?${keyName}=${value}`, { scroll: scrollToTop });
  };

  return (
    <Dropdown.Root open={open} onOpenChange={setOpen} className={css({ position: 'relative' })}>
      <Dropdown.Trigger className={cx(triggerStyles, className)}>
        <Icon name="sort" size={20} />
        <span>{currentLabel}</span>
      </Dropdown.Trigger>
      <Dropdown.Content className={contentStyles}>
        {itemList.map(item => (
          <Dropdown.Item key={item.label} classNames={itemStyles} onSelect={() => routeTo(item.value)}>
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown.Root>
  );
}

const triggerStyles = cx(
  buttonRecipe({ size: 'sm', variant: 'outline' }),
  css({ rounded: 'full', fontSize: 'sm', fontWeight: 'medium!' })
);

const contentStyles = css({
  position: 'absolute',
  bg: 'gray.800',
  fontSize: 'sm',
  w: 24,
  right: 0,
  rounded: 'md',
  py: 2,
  mt: 1,
});

const itemStyles = css({
  display: 'flex',
  py: 2,
  px: 4,
  cursor: 'pointer',
  userSelect: 'none',

  bg: {
    _hover: 'gray.700',
    _focus: { base: 'gray.700', _hover: 'gray.600' },
  },
});
