"use client";

import { getStyledProperty } from "@/utils/getStyledProperty";
import { PropertyValue } from "@/components/PropertyValue";
import { ClientWrapper } from "@/components/ClientWrapper";

export const ClientPropertyValue = ({
  propertyKey,
}: {
  propertyKey: string;
}) => {
  const propertyValue = getStyledProperty(propertyKey);
  return (
    <ClientWrapper>
      <PropertyValue propertyValue={propertyValue} />
    </ClientWrapper>
  );
};
