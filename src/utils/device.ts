function isMobile() {
  return window.innerWidth < 768;
}

function isTablet() {
  return window.innerWidth >= 768 && window.innerWidth < 992;
}

function isDesktop() {
  return window.innerWidth >= 992;
}

function isLargeDesktop() {
  return window.innerWidth >= 1200;
}

export { isDesktop, isLargeDesktop, isMobile, isTablet };
