/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { SpacerProperties } from '../patterns/spacer';
import type { HTMLCpProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type SpacerProps = SpacerProperties & DistributiveOmit<HTMLCpProps<'div'>, keyof SpacerProperties >


export declare const Spacer: FunctionComponent<SpacerProps>