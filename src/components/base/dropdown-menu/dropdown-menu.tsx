'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React, { forwardRef } from 'react';

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

interface DropdownMenuContentProps extends DropdownMenuPrimitive.DropdownMenuContentProps {
  children: React.ReactNode;
}

export const DropdownMenuContent = forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content {...props} ref={forwardedRef}>
          {children}
          <DropdownMenuPrimitive.Arrow />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    );
  }
);

DropdownMenuContent.displayName = 'DropdownMenuContent';

export const DropdownMenuLabel = DropdownMenuPrimitive.Label;
export const DropdownMenuItem = DropdownMenuPrimitive.Item;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;
