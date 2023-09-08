/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { SquareProperties } from '../patterns/square';
import type { HTMLCpProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type SquareProps = SquareProperties & DistributiveOmit<HTMLCpProps<'div'>, keyof SquareProperties >


export declare const Square: FunctionComponent<SquareProps>