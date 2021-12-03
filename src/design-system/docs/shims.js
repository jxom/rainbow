global.requestAnimationFrame =
  typeof window !== 'undefined' ? window.requestAnimationFrame : () => {};
