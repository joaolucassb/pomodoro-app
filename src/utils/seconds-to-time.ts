export function secondsToTime(seconds: number): string {
  const zeroLeeft = (n: number) => Math.floor(n).toString().padStart(2, '0');
  const min = zeroLeeft((seconds / 60) % 60);
  const sec = zeroLeeft((seconds % 60) % 60);
  return `${min}:${sec}`;
}
