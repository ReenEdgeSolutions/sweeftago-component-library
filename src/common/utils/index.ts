/**
 * Recursively makes all properties of T optional
 */
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
};

/**
 * Converts a pixel value to rem
 */
export const pxToRem = (px: number): string => {
  return `${px / 16}rem`;
};

/**
 * Checks if a value is an object
 */
export const isObject = (item: unknown): boolean => {
  return typeof item === "object" && item !== null && !Array.isArray(item);
};

/**
 * Deep merges two objects
 */
export const mergeDeep = (target: any, source: any): any => {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }

  return output;
};

/**
 * Checks if a color is bright
 * @param color - hex color
 * @param threshold - luminance threshold
 */
export const isColorBright = (color: string, threshold: number = 130): boolean => {
  // Convert hex color to RGB
  const hex = color.substring(1); // Remove #
  const rgb = parseInt(hex, 16); // Convert to decimal
  const r = (rgb >> 16) & 0xff; // Extract red
  const g = (rgb >> 8) & 0xff; // Extract green
  const b = (rgb >> 0) & 0xff; // Extract blue

  // Calculate luminance (perceived brightness)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Compare with threshold
  return luminance > threshold;
};

/**
 * Formats a Date object into a string with the format: 'Month Day, Year' (e.g., 'February 8, 2024').
 *
 * @param dateInput - The date to format. Can be a Date object, a date string, or a timestamp.
 * @returns A formatted date string.
 * @throws Will throw an error if the provided dateInput is invalid.
 */
export const formatDate = (dateInput: Date | string | number): string => {
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date provided.");
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};

/**
 * Returns the initials from a string.
 *
 * @param name - The name from which to derive initials.
 */
export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};

export const scrollToSection = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

/**
 * A small helper to simulate an async API call
 * that resolves (or rejects) after a short delay.
 */
export const simulateApiCall = (shouldError = false, delay = 1500): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (shouldError) {
        reject(new Error("Something went wrong"));
      } else {
        resolve();
      }
    }, delay);
  });
};
