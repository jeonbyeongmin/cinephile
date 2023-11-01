import { cp, type HTMLCpProps } from '@/styled-system/jsx';

export const ButtonIcon = (props: HTMLCpProps<'span'>) => {
  const { children, ...rest } = props;

  return <cp.span {...rest}>{children}</cp.span>;
};
