import { getStyledProperty } from "@/utils/getStyledProperty";
import { PropertyValue } from "@/components/PropertyValue";
import styles from "./page.module.css";

export default function UsingUtil() {
  return (
    <div className={styles.page}>
      <h3>Only using util function</h3>
      <PropertyValue
        propertyValue={getStyledProperty("--breakpoint-desktop-small-min")}
      />
    </div>
  );
}
