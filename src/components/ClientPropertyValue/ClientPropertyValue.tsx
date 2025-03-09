"use client";
import { useEffect, useState } from "react";
import { getStyledProperty } from "@/utils/getStyledProperty";
import { PropertyValue } from "../PropertyValue";

export const ClientPropertyValue = ({
  propertyKey,
}: {
  propertyKey: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const propertyValue = getStyledProperty(propertyKey);
  return <PropertyValue propertyValue={propertyValue} />;
};
