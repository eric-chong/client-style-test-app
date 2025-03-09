"use client";

import { useStyleProperty } from "@/hooks/useStyleProperty";
import { PropertyValue } from "@/components/PropertyValue";

export const HookPropertyValue = ({ propertyKey }: { propertyKey: string }) => {
  const { getStyleProperty } = useStyleProperty();

  return <PropertyValue propertyValue={getStyleProperty(propertyKey)} />;
};
