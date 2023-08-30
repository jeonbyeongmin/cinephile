/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'
import type { DistributiveOmit } from '../types/system-types'

type MenuItemVariant = {
  active: boolean
}

type MenuItemVariantMap = {
  [key in keyof MenuItemVariant]: Array<MenuItemVariant[key]>
}

export type MenuItemVariantProps = {
  [key in keyof MenuItemVariant]?: ConditionalValue<MenuItemVariant[key]>
}

interface MenuItemRecipe {
  __type: MenuItemVariantProps
  (props?: MenuItemVariantProps): string
  raw: (props?: MenuItemVariantProps) => MenuItemVariantProps
  variantMap: MenuItemVariantMap
  variantKeys: Array<keyof MenuItemVariant>
  splitVariantProps<Props extends MenuItemVariantProps>(props: Props): [MenuItemVariantProps, Pretty<DistributiveOmit<Props, keyof MenuItemVariantProps>>]
}


export declare const menuItem: MenuItemRecipe