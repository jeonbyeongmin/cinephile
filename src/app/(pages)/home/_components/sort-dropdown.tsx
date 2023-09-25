'use client';

import * as Dropdown from '@/components/dropdown';

import { Icon } from '@/components';
import { buttonRecipe } from '@/components/button/recipe';
import { useToggle } from '@/hooks';
import { css, cx } from '@/styled-system/css';
import { useRouter } from 'next/navigation';

const itemList = [
  { label: '반응순', value: 'hot' },
  { label: '최신순', value: 'new' },
];

export function SortDropdown({ value }: { value: 'new' | 'hot' }) {
  const router = useRouter();
  const [open, toggleOpen] = useToggle(false);

  const label = itemList.find(item => item.value === value)?.label;

  return (
    <Dropdown.Root open={open} onOpenChange={toggleOpen} className={css({ position: 'relative' })}>
      <Dropdown.Trigger className={triggerStyles}>
        <Icon name="sort" size={20} />
        <span>{label}</span>
      </Dropdown.Trigger>
      <Dropdown.Content classNames={contentStyles}>
        {itemList.map(item => (
          <Dropdown.Item
            key={item.label}
            classNames={itemStyles}
            onSelect={() => router.push(`/home?sort=${item.value}`)}
          >
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown.Root>
  );
}

const triggerStyles = cx(buttonRecipe({ size: 'sm', variant: 'outline' }), css({ rounded: 'full', fontSize: 'sm' }));

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
  _hover: {
    bg: 'gray.700',
  },
});
