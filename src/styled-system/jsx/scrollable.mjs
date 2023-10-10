import { createElement, forwardRef } from 'react'
import { cp } from './factory.mjs';
import { getScrollableStyle } from '../patterns/scrollable.mjs';

export const Scrollable = /* @__PURE__ */ forwardRef(function Scrollable(props, ref) {
  const { direction, hideScrollbar, ...restProps } = props
const styleProps = getScrollableStyle({direction, hideScrollbar})
return createElement(cp.div, { ref, ...styleProps, ...restProps })
})