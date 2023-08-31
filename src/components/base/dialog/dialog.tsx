'use client';

import { Button } from '@/components/base/button';
import { Icon } from '@/components/base/icon';
import { css } from '@/styled-system/css';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

interface DialogContentProps extends DialogPrimitive.DialogContentProps {
  children: React.ReactNode;
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(({ children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay
      className={css({ position: 'fixed', inset: 0, bg: 'black', animation: 'fadein 150ms forwards' })}
    />
    <div className={css({ position: 'fixed', inset: 0, overflowY: 'auto' })}>
      <div className={css({ display: 'flex', minH: 'full', alignItems: 'center', justifyContent: 'center' })}>
        <DialogPrimitive.Content {...props} ref={ref}>
          {children}
          <DialogPrimitive.Close aria-label="Close" asChild>
            <Button variant="ghost" p={1} css={{ position: 'absolute', top: 5, right: 5 }}>
              <Icon name="close" size={18} />
            </Button>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </div>
    </div>
  </DialogPrimitive.Portal>
));

DialogContent.displayName = 'DialogContent';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
