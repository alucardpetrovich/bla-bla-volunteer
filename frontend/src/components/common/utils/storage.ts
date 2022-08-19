export const getFromStorage = <T = string>(key: string): T | null => {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value);
  } catch (err) {
    return JSON.parse(JSON.stringify(value));
  }
};

export const setToStorage = <T = string>(key: string, value: T) => {
  if (typeof value === 'string') {
    localStorage.setItem(key, value);
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromStorage = (key: string) => {
  localStorage.removeItem(key);
};
