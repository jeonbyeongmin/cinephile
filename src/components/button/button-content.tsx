import { ReactElement, ReactNode, type PropsWithChildren } from 'react';
import { ButtonIcon } from './button-icon';

export type ButtonContentProps = {
  children?: ReactNode | undefined;
  leftElement?: ReactElement;
  rightElement?: ReactElement;
};

export const ButtonContent = (props: PropsWithChildren<ButtonContentProps>) => {
  const { leftElement, rightElement, children } = props;
  return (
    <>
      {leftElement && <ButtonIcon>{leftElement}</ButtonIcon>}
      {children}
      {rightElement && <ButtonIcon>{rightElement}</ButtonIcon>}
    </>
  );
};
