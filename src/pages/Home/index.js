import { useNavigate } from "react-router-dom";
import ItemList from "../../components/ItemList";
import products from "../../products.json";

const Home = () => {
  const navigate = useNavigate();

  function openDetail(id) {
    navigate(`/details/${id}`);
  }

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map((product) => (
          <ItemList key={product.id} product={product} onClick={openDetail} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
