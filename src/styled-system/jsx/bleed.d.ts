/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BleedProperties } from '../patterns/bleed';
import type { HTMLCpProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BleedProps extends BleedProperties, DistributiveOmit<HTMLCpProps<'div'>, keyof BleedProperties > {}


export declare const Bleed: FunctionComponent<BleedProps>