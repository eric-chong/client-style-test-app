export const getStyledProperty = (
  propertyKey: string,
  element?: Element
): string | undefined => {
  if (element === undefined && typeof document === "undefined") return;

  return getComputedStyle(element || document.body).getPropertyValue(
    propertyKey
  );
};
