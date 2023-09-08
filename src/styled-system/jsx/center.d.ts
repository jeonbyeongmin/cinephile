/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { CenterProperties } from '../patterns/center';
import type { HTMLCpProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type CenterProps = CenterProperties & DistributiveOmit<HTMLCpProps<'div'>, keyof CenterProperties >


export declare const Center: FunctionComponent<CenterProps>