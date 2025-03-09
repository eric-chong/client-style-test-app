import { ClientPropertyValue } from "@/components/ClientPropertyValue";
import styles from "./page.module.css";

export default function UsingUtil() {
  return (
    <div className={styles.page}>
      <h3>Using client wrapper component</h3>
      <ClientPropertyValue propertyKey={"--breakpoint-desktop-small-min"} />
    </div>
  );
}
