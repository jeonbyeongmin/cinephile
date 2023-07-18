import type { IconName } from '@/components/base/Icon/icon-map';
import type { ComponentPropsWithoutRef } from 'react';

import { Icon } from '@/components/base/Icon';
import { forwardRef } from 'react';

interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  icon: IconName;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { icon, title, className, ...rest } = props;

  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center border border-gray-400 p-2 rounded-md bg-inherit transition-all hover:bg-gray-700 ${className}`}
      {...rest}
      title={title ?? icon}
    >
      <Icon name={icon} fill="none" />
    </button>
  );
});

IconButton.displayName = 'IconButton';
