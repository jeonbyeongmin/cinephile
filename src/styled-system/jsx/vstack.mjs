import { createElement, forwardRef } from 'react'
import { cp } from './factory.mjs';
import { getVstackStyle } from '../patterns/vstack.mjs';

export const VStack = /* @__PURE__ */ forwardRef(function VStack(props, ref) {
  const { justify, gap, ...restProps } = props
const styleProps = getVstackStyle({justify, gap})
return createElement(cp.div, { ref, ...styleProps, ...restProps })
})