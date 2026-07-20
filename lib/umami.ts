type UmamiEventData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: UmamiEventData) => void;
    };
  }
}

export function track(event: string, data?: UmamiEventData) {
  if (typeof window === "undefined") return;
  window.umami?.track(event, data);
}
