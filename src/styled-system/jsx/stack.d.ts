/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { StackProperties } from '../patterns/stack';
import type { HTMLCpProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type StackProps = StackProperties & DistributiveOmit<HTMLCpProps<'div'>, keyof StackProperties >


export declare const Stack: FunctionComponent<StackProps>