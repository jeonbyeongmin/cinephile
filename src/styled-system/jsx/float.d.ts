/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { FloatProperties } from '../patterns/float';
import type { HTMLCpProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type FloatProps = FloatProperties & DistributiveOmit<HTMLCpProps<'div'>, keyof FloatProperties >


export declare const Float: FunctionComponent<FloatProps>