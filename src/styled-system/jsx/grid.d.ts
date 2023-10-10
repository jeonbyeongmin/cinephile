/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridProperties } from '../patterns/grid';
import type { HTMLCpProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridProps extends GridProperties, DistributiveOmit<HTMLCpProps<'div'>, keyof GridProperties > {}


export declare const Grid: FunctionComponent<GridProps>