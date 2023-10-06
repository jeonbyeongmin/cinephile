export function getTotalItemsWidth(items: HTMLLIElement[]) {
  const left = items[0].getBoundingClientRect().left;
  const right = items[items.length - 1].getBoundingClientRect().right;
  return right - left;
}

export function calcAngle(x: number, y: number) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

export function isVertical(angle: number) {
  const isUp = angle <= -90 + 45 && angle >= -90 - 45;
  const isDown = angle <= 90 + 45 && angle >= 90 - 45;

  return isUp || isDown;
}

export function swipePower(offset: number, velocity: number) {
  return Math.abs(offset) * velocity;
}
