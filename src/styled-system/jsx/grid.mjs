import { createElement, forwardRef } from 'react'
import { cp } from './factory.mjs';
import { getGridStyle } from '../patterns/grid.mjs';

export const Grid = /* @__PURE__ */ forwardRef(function Grid(props, ref) {
  const { gap, columnGap, rowGap, columns, minChildWidth, ...restProps } = props
const styleProps = getGridStyle({gap, columnGap, rowGap, columns, minChildWidth})
return createElement(cp.div, { ref, ...styleProps, ...restProps })
})