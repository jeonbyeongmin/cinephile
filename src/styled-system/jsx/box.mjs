import { createElement, forwardRef } from 'react'
import { cp } from './factory.mjs';
import { getBoxStyle } from '../patterns/box.mjs';

export const Box = /* @__PURE__ */ forwardRef(function Box(props, ref) {
  const styleProps = getBoxStyle()
return createElement(cp.div, { ref, ...styleProps, ...props })
})