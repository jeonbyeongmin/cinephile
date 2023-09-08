import { RecipeVariantProps, cva } from '@/styled-system/css';
import { HTMLCpProps, cp } from '@/styled-system/jsx';
import { forwardRef } from 'react';

export const inputStyles = cva({
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    bg: { base: 'gray.900', _focusWithin: 'gray.800' },
    border: '1px solid',
    borderColor: 'gray.800',
    _focusWithin: { outline: 'focus' },

    '& > input': {
      display: 'block',
      flex: 1,
      bg: 'transparent',
      outline: 'none',
      color: 'gray.50',
      appearance: 'none',
      lineHeight: 'tight',
    },
  },

  variants: {
    inputSize: {
      md: { p: 2, gap: 2 },
      lg: { p: 3, gap: 3 },
    },
  },

  defaultVariants: {
    inputSize: 'md',
  },
});

export type InputVariants = RecipeVariantProps<typeof inputStyles>;

export type InputProps = InputVariants &
  HTMLCpProps<'input'> & { leftElement?: React.ReactNode; rightElement?: React.ReactNode };

export const Input = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const { rightElement, inputSize, rounded, color, leftElement, className, ...rest } = props;

  return (
    <cp.div className={inputStyles({ inputSize })} rounded={rounded} color={color}>
      <label htmlFor={rest.id}>{leftElement}</label>
      <cp.input ref={forwardedRef} spellCheck={false} className={className} {...rest} />
      {rightElement}
    </cp.div>
  );
});

Input.displayName = 'Input';
