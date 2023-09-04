import { createElement, forwardRef } from 'react'
import { cp } from './factory.mjs';
import { getLinkOverlayStyle } from '../patterns/link-overlay.mjs';

export const LinkOverlay = /* @__PURE__ */ forwardRef(function LinkOverlay(props, ref) {
  const styleProps = getLinkOverlayStyle()
return createElement(cp.a, { ref, ...styleProps, ...props })
})