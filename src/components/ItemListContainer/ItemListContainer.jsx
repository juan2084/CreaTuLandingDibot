import styles from "./itemListContainer.module.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1 className={styles.h1}> {greeting} </h1>{" "}
    </div>
  );
};

export default ItemListContainer;
