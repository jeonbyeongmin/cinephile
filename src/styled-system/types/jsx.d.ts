/* eslint-disable */
import type { ComponentPropsWithoutRef, ElementType, ElementRef, Ref } from 'react'
import type { Assign, DistributiveOmit, JsxHTMLProps, JsxStyleProps } from './system-types';
import type { RecipeDefinition, RecipeSelection, RecipeVariantRecord } from './recipe';

type Dict = Record<string, unknown>

export type ComponentProps<T extends ElementType> = DistributiveOmit<ComponentPropsWithoutRef<T>, 'ref'> & {
  ref?: Ref<ElementRef<T>>
}

export interface CpComponent<T extends ElementType, P extends Dict = {}> {
  (props: JsxHTMLProps<ComponentProps<T>, Assign<JsxStyleProps, P>>): JSX.Element
  displayName?: string
}

interface RecipeFn { __type: any }

interface JsxFactoryOptions<TProps extends Dict> {
  dataAttr?: boolean
  defaultProps?: TProps
  shouldForwardProp?(prop: string, variantKeys: string[]): boolean
}

export type JsxRecipeProps<T extends ElementType, P extends Dict> = JsxHTMLProps<ComponentProps<T>, P>;

interface JsxFactory {
  <T extends ElementType>(component: T): CpComponent<T, {}>
  <T extends ElementType, P extends RecipeVariantRecord>(component: T, recipe: RecipeDefinition<P>, options?: JsxFactoryOptions<JsxRecipeProps<T, RecipeSelection<P>>>): CpComponent<
    T,
    RecipeSelection<P>
  >
  <T extends ElementType, P extends RecipeFn>(component: T, recipeFn: P, options?: JsxFactoryOptions<JsxRecipeProps<T, P['__type']>>): CpComponent<T, P['__type']>
}

type JsxElements = { [K in keyof JSX.IntrinsicElements]: CpComponent<K, {}> }

export type Cp = JsxFactory & JsxElements

export type HTMLCpProps<T extends ElementType> = JsxHTMLProps<ComponentProps<T>, JsxStyleProps>