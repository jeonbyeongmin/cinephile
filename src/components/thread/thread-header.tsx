import { Icon } from '@/components/icon';
import { IconButton } from '@/components/icon-button';
import { Flex } from '@/styled-system/jsx';

interface ThreadHeaderProps {
  children: React.ReactNode;
}

export function ThreadHeader({ children }: ThreadHeaderProps) {
  return (
    <Flex align="center" mb={3}>
      {children}
      <IconButton
        icon={<Icon name="moreVertical" size={16} />}
        aria-label="more button"
        variant="ghost"
        size="sm"
        rounded="full"
      />
    </Flex>
  );
}
