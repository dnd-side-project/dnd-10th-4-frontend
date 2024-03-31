// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <Callback extends (...args: any[]) => any>(
  callback: Callback,
  delay: number = 300,
) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<Callback>): ReturnType<Callback> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      result = callback.apply(this, args);
    }, delay);

    return result;
  };
};
