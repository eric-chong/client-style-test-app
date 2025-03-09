"use client";
import { PropertyValue } from "@/components/PropertyValue";
import { getStyledProperty } from "@/utils/getStyledProperty";

export const ClientWrapper = () => {
  return (
    <PropertyValue
      propertyValue={getStyledProperty("--breakpoint-desktop-small-min")}
    />
  );
};
