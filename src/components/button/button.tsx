import { ButtonVariants, buttonRecipe } from '@/components/button/recipe';
import { Link, type LinkProps } from '@/components/link';
import { cx } from '@/styled-system/css';
import { cp, type HTMLCpProps } from '@/styled-system/jsx';
import { ButtonContent, type ButtonContentProps } from './button-content';

export type ButtonProps = ButtonVariants & ButtonContentProps & HTMLCpProps<'button'> & LinkProps;

export const Button = (props: ButtonProps) => {
  const { variant, size, href, leftElement, colorScheme, rightElement, children, className, ...rest } = props;

  if (href) {
    return (
      <Link href={href} className={cx(buttonRecipe({ variant, size, colorScheme }))} {...rest}>
        <ButtonContent leftElement={leftElement} rightElement={rightElement}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <cp.button className={cx(buttonRecipe({ variant, size, colorScheme }), className)} {...rest}>
      <ButtonContent leftElement={leftElement} rightElement={rightElement}>
        {children}
      </ButtonContent>
    </cp.button>
  );
};
