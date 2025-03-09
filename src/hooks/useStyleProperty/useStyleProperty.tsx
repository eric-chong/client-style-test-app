"use client";

import { useEffect, useState } from "react";
import { getStyledProperty } from "@/utils/getStyledProperty";

interface IUseStyleProperty {
  getStyleProperty: typeof getStyledProperty;
}
export const useStyleProperty = (): IUseStyleProperty => {
  const [getStyleProperty, setGetStyleProperty] = useState<
    typeof getStyledProperty | undefined
  >();

  useEffect(() => {
    if (typeof document !== "undefined") {
      setGetStyleProperty(() => getStyledProperty);
    }
  }, []);

  return {
    getStyleProperty: getStyleProperty ? getStyleProperty : () => undefined,
  };
};
