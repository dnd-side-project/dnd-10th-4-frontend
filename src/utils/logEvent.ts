/** Google Analytics에게 수집할 이벤트를 전달합니다. */
export const logEvent = <Command extends keyof Gtag.GtagCommands>(
  command: Command,
  ...args: Gtag.GtagCommands[Command]
): void => {
  if (!window.gtag) {
    throw new Error('Google Analytics is not initialized');
  }

  window.gtag(command, ...args);
};
