/* eslint-disable */
import type { ComponentPropsWithoutRef, ElementType, ElementRef, Ref } from 'react'
import type { Assign, DistributiveOmit, JsxHTMLProps, JsxStyleProps } from './system-types';
import type { RecipeDefinition, RecipeSelection, RecipeVariantRecord } from './recipe';

type Dict = Record<string, unknown>

type ComponentProps<T extends ElementType> = DistributiveOmit<ComponentPropsWithoutRef<T>, 'ref'> & {
  ref?: Ref<ElementRef<T>>
}

export type CpComponent<T extends ElementType, P extends Dict = {}> = {
  (props: JsxHTMLProps<ComponentProps<T>, Assign<JsxStyleProps, P>>): JSX.Element
  displayName?: string
}

type RecipeFn = { __type: any }

interface JsxFactory {
  <T extends ElementType>(component: T): CpComponent<T, {}>
  <T extends ElementType, P extends RecipeVariantRecord>(component: T, recipe: RecipeDefinition<P>): CpComponent<
    T,
    RecipeSelection<P>
  >
  <T extends ElementType, P extends RecipeFn>(component: T, recipeFn: P): CpComponent<T, P['__type']>
}

type JsxElements = { [K in keyof JSX.IntrinsicElements]: CpComponent<K, {}> }

export type Cp = JsxFactory & JsxElements

export type HTMLCpProps<T extends ElementType> = JsxHTMLProps<ComponentProps<T>, JsxStyleProps>