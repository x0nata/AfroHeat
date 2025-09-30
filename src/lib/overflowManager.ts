let scrollLockCount = 0;

export const lockScroll = () => {
  scrollLockCount++;
  if (scrollLockCount === 1) {
    document.body.style.overflow = 'hidden';
  }
};

export const unlockScroll = () => {
  scrollLockCount--;
  if (scrollLockCount <= 0) {
    document.body.style.overflow = '';
    scrollLockCount = 0;
  }
};