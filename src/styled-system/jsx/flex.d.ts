/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { FlexProperties } from '../patterns/flex';
import type { HTMLCpProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type FlexProps = FlexProperties & DistributiveOmit<HTMLCpProps<'div'>, keyof FlexProperties >


export declare const Flex: FunctionComponent<FlexProps>