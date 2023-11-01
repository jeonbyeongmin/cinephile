/* eslint-disable react/display-name */

import { forwardRef } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps extends React.ComponentPropsWithoutRef<'div'> {
  container?: HTMLElement | null;
}

export const Portal = forwardRef<HTMLDivElement, PortalProps>((props, forwardedRef) => {
  const { container = window.document.body, ...portalProps } = props;

  return container ? ReactDOM.createPortal(<div {...portalProps} ref={forwardedRef} />, container) : null;
});
