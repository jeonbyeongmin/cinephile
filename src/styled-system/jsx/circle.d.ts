/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { CircleProperties } from '../patterns/circle';
import type { HTMLCpProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface CircleProps extends CircleProperties, DistributiveOmit<HTMLCpProps<'div'>, keyof CircleProperties > {}


export declare const Circle: FunctionComponent<CircleProps>