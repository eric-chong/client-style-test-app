import styles from "./styles.module.css";

export const PropertyValue = ({
  propertyValue,
}: {
  propertyValue?: string;
}) => {
  return (
    <div className={styles.propertyValue}>
      <pre>{`Styled property value: ${JSON.stringify(propertyValue)}`}</pre>
    </div>
  );
};
