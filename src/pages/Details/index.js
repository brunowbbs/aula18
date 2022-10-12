import { useParams, useNavigate } from "react-router-dom";

import products from "../../products.json";

import styles from "../../styles.module.css";

const Details = () => {
  let params = useParams();
  const navigate = useNavigate();

  let productId = params.id;

  const product = products.find((product) => product.id === Number(productId));

  return (
    <>
      <button onClick={() => navigate(-1)}>Voltar</button>

      <div className={styles.wrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image_details}
        />
        <div>
          <h3 className={styles.title_details}>{product.name}</h3>
          <h4 className={styles.brand_details}>{product.brand}</h4>
          <h4 className={styles.price_details}>{product.price}</h4>
          <h4 className={styles.description_details}>{product.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Details;
