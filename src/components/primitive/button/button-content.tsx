import { ReactElement, ReactNode, type PropsWithChildren } from 'react';

export type ButtonContentProps = {
  children?: ReactNode | undefined;
  leftElement?: ReactElement;
  rightElement?: ReactElement;
};

export const ButtonContent = (props: PropsWithChildren<ButtonContentProps>) => {
  const { leftElement, rightElement, children } = props;
  return (
    <>
      {leftElement ? leftElement : null}
      {children}
      {rightElement ? rightElement : null}
    </>
  );
};
