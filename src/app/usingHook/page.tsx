import { HookPropertyValue } from "@/components/HookPropertyValue";
import styles from "./page.module.css";

export default function UsingUtil() {
  return (
    <div className={styles.page}>
      <h3>Using custom hook</h3>
      <HookPropertyValue propertyKey={"--breakpoint-desktop-small-min"} />
    </div>
  );
}
