/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { VisuallyHiddenProperties } from '../patterns/visually-hidden'
import type { HTMLCpProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export type VisuallyHiddenProps = VisuallyHiddenProperties & DistributiveOmit<HTMLCpProps<'div'>, keyof VisuallyHiddenProperties >


export declare const VisuallyHidden: FunctionComponent<VisuallyHiddenProps>