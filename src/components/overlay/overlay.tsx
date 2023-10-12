import { css, cx } from '@/styled-system/css';

interface OverlayProps {
  className?: string;
}

export function Overlay(props: OverlayProps) {
  const { className } = props;

  return <div className={cx(overlayBaseStyles, className)} />;
}

const overlayBaseStyles = css({
  inset: 0,
  position: 'fixed',
  zIndex: 9998,
});
