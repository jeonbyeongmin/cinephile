import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const menuItemFn = createRecipe('menu-item', {
  "active": false
}, [])

const menuItemVariantMap = {
  "active": [
    "true",
    "false"
  ]
}
const menuItemVariantKeys = Object.keys(menuItemVariantMap)
export const menuItem = Object.assign(menuItemFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: menuItemVariantKeys,
  variantMap: menuItemVariantMap,
  splitVariantProps(props) {
    return splitProps(props, menuItemVariantKeys)
  },
})