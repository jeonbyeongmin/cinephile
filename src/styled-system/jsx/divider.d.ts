/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { DividerProperties } from '../patterns/divider';
import type { HTMLCpProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface DividerProps extends DividerProperties, DistributiveOmit<HTMLCpProps<'div'>, keyof DividerProperties > {}


export declare const Divider: FunctionComponent<DividerProps>