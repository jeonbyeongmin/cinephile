import type { Point } from 'framer-motion';

export function getTotalItemsWidth(items: HTMLLIElement[]) {
  const left = items[0].getBoundingClientRect().left;
  const right = items[items.length - 1].getBoundingClientRect().right;
  return right - left;
}

export function calculateAngle(x: number, y: number) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

export function calculateAngle2D(p1: Point, p2: Point) {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);
}

export function isVertical(angle: number) {
  const isUp = angle <= -90 + 45 && angle >= -90 - 45;
  const isDown = angle <= 90 + 45 && angle >= 90 - 45;

  return isUp || isDown;
}
