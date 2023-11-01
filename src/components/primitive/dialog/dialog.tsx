'use client';

import { Icon } from '@/components/primitive/icon';
import { IconButton } from '@/components/primitive/icon-button';
import { css, cx } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

interface DialogContentProps extends DialogPrimitive.DialogContentProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, title, description, className, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className={css({
          inset: 0,
          position: 'fixed',
          display: 'grid',
          placeItems: 'center',
          bg: 'rgba(155,155,155,.1)',
          overflowY: 'auto',
          zIndex: 1,
          p: { base: 0, md: 5 },

          '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
            backdropFilter: 'blur(8px)',
          },
        })}
      >
        <DialogPrimitive.Content
          className={cx(
            css({
              w: 'full',
              bg: 'gray.950',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              rounded: { base: 'none', md: '2xl' },
            }),
            className
          )}
          {...props}
          ref={ref}
        >
          {!!title && (
            <Flex direction="column" mb={5} top={3} left={3}>
              <DialogPrimitive.Title className={css({ fontSize: 'xl', fontWeight: 'bold' })}>
                {title}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className={css({ fontSize: 'sm', color: 'gray.500' })}>
                {description}
              </DialogPrimitive.Description>
            </Flex>
          )}

          {children}
          <DialogPrimitive.Close aria-label="Close" asChild>
            <IconButton
              aria-label="close"
              icon={<Icon name="close" size={16} />}
              size="sm"
              variant="ghost"
              rounded="md"
              css={{ position: 'absolute', top: 3, right: 3 }}
            />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Overlay>
    </DialogPrimitive.Portal>
  )
);

DialogContent.displayName = 'DialogContent';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
