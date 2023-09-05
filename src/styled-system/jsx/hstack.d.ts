/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { HstackProperties } from '../patterns/hstack';
import type { HTMLCpProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type HstackProps = HstackProperties & DistributiveOmit<HTMLCpProps<'div'>, keyof HstackProperties >


export declare const HStack: FunctionComponent<HstackProps>