import { cva } from '@/styled-system/css';
import { HTMLCpProps, cp } from '@/styled-system/jsx';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

const LinkStyles = cva({});

export type LinkProps = { href?: NextLinkProps['href'] } & Omit<HTMLCpProps<'a'>, 'href'>;

export const Link = cp(NextLink, LinkStyles);
