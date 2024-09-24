export const delay = (callback: () => void, ms: number) =>
  new Promise((resolve) => setTimeout(() => resolve(callback()), ms));
