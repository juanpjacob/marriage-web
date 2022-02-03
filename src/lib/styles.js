export function joinStyles(styles) {
  return Object.entries(styles)
    .reduce((classNames, [className, condition]) => {
      if (condition) {
        return [...classNames, className];
      }
      return classNames;
    }, [])
    .join(' ');
}
