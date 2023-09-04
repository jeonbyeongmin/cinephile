/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { VstackProperties } from '../patterns/vstack'
import type { HTMLCpProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export type VstackProps = VstackProperties & DistributiveOmit<HTMLCpProps<'div'>, keyof VstackProperties >


export declare const VStack: FunctionComponent<VstackProps>