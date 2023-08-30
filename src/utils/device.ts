export function isMobile() {
  return window.innerWidth < 768;
}

export function isTablet() {
  return window.innerWidth >= 768 && window.innerWidth < 992;
}

export function isDesktop() {
  return window.innerWidth >= 992;
}

export function isLargeDesktop() {
  return window.innerWidth >= 1200;
}
