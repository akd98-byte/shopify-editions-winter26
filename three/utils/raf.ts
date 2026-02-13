export function createRAF(callback: (time: number) => void) {
  let rafId: number;

  const loop = (time: number) => {
    callback(time);
    rafId = requestAnimationFrame(loop);
  };

  const start = () => {
    rafId = requestAnimationFrame(loop);
  };

  const stop = () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  };

  return { start, stop };
}
