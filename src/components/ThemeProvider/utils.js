export const isSystemDark = window?.matchMedia
  ? window.matchMedia('(prefers-color-scheme: dark)')?.matches
  : undefined;

export const saveTheme = (theme) =>{
  window.localStorage && localStorage.setItem('selectedTheme', theme);
}

/* istanbul ignore next line */
export const getThemeFromStorage = () => {
  return window.localStorage
    ? (localStorage.getItem('selectedTheme')) || null
    : null;
}
