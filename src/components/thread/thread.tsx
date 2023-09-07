import { Icon } from '@/components/icon';
import { IconButton } from '@/components/icon-button';
import { threadBodyStyles } from '@/components/thread/thread-body.styles';
import { css, cx } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

/**
 * 스레드 컴포넌트의 공통 레이아웃과 스타일을 분리하였습니다.
 */

interface ThreadProps {
  children: React.ReactNode;
}

export function Thread({ children }: ThreadProps) {
  return (
    <Flex direction="column" bg="gray.950" px={3} py={4}>
      {children}
    </Flex>
  );
}

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

interface ThreadBodyProps {
  title?: string;
  children: React.ReactNode;
}

export function ThreadBody({ title, children }: ThreadBodyProps) {
  return (
    <div className={cx(threadBodyStyles, css({ fontSize: { base: 'sm', md: 'md' }, position: 'relative' }))}>
      {!!title && <p className={css({ fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold', mb: 3 })}>{title}</p>}
      {children}
    </div>
  );
}

interface ThreadContentProps {
  children: React.ReactNode;
}

export function ThreadFooter({ children }: ThreadContentProps) {
  return <Flex mt={2}>{children}</Flex>;
}
