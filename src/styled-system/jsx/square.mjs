import { createElement, forwardRef } from 'react'
import { cp } from './factory.mjs';
import { getSquareStyle } from '../patterns/square.mjs';

export const Square = /* @__PURE__ */ forwardRef(function Square(props, ref) {
  const { size, ...restProps } = props
const styleProps = getSquareStyle({size})
return createElement(cp.div, { ref, ...styleProps, ...restProps })
})