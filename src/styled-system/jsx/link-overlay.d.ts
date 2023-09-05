/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { LinkOverlayProperties } from '../patterns/link-overlay';
import type { HTMLCpProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type LinkOverlayProps = LinkOverlayProperties & DistributiveOmit<HTMLCpProps<'a'>, keyof LinkOverlayProperties >


export declare const LinkOverlay: FunctionComponent<LinkOverlayProps>