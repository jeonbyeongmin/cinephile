'use client';

import { Tabs } from '@/components/tabs';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const tabs = [
  { id: 'tab1', label: '스레드' },
  { id: 'tab2', label: '답글' },
  { id: 'tab3', label: '좋아요' },
];

export function ThreadTabs() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List
        className={flex({
          direction: 'row',
        })}
      >
        {tabs.map(tab => (
          <Tabs.Trigger key={tab.id} value={tab.id} className={triggerStyles}>
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {tabs.map(tab => (
        <Tabs.Content key={tab.id} value={tab.id}>
          {tab.label}
        </Tabs.Content>
      ))}
    </Tabs>
  );
}

const triggerStyles = css({
  cursor: 'pointer',
  fontWeight: 'bold',
  w: 'full',
  py: 3,

  '&[data-state="active"]': {
    color: 'inherit',
    borderBottom: '2px solid token(colors.yellow.600)',
  },

  '&[data-state="inactive"]': {
    color: 'gray.500',
  },

  _hover: {
    bgColor: 'gray.800',
  },

  _focus: {
    bgColor: 'gray.800',
  },
});
