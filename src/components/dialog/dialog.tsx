'use client';

import { Icon } from '@/components/icon';
import { IconButton } from '@/components/icon-button';
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
          animation: 'overlay 150ms forwards',
          p: 5,
          overflowY: 'auto',
          zIndex: 1,
        })}
      >
        <DialogPrimitive.Content
          className={cx(
            css({
              w: 'full',
              rounded: '2xl',
              bg: 'gray.950',
              animation: 'contentShow 150ms forwards',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }),
            className
          )}
          {...props}
          ref={ref}
        >
          {!!title && (
            <Flex direction="column" mb={5} top={3} left={3}>
              <p className={css({ fontSize: 'xl', fontWeight: 'bold' })}>{title}</p>
              <p className={css({ fontSize: 'sm', color: 'gray.500' })}>{description}</p>
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
