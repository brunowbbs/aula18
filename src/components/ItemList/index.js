import styles from "../../styles.module.css";

const ItemList = ({ product, onClick }) => (
  <li className={styles.item_list} data-testid="item">
    <img className={styles.img_list} src={product.image} alt={product.name} />
    <div className={styles.content}>
      <h3 className={styles.title_list}>{product.name}</h3>
      <p className={styles.price_list}>{product.price}</p>
      <button className={styles.button} onClick={() => onClick(product.id)}>
        Ver detalhes
      </button>
    </div>
  </li>
);

export default ItemList;
