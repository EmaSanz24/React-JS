import { useParams, Link } from "react-router-dom";

const Navigation = () => {
  const { category, type, Id } = useParams();
  return (
    <div className="Navigation">
      {!category ? (
        " "
      ) : (
        <span>
          <Link to={`/products`}>Productos</Link>
          {"> "}
          <Link to={`/products/${category}`}>{category}</Link>
        </span>
      )}
      {!type ? (
        " "
      ) : (
        <span>
          {"> "}
          <Link to={`/products/${category}/${type}`}>{type}</Link>
        </span>
      )}
      {!Id ? (
        " "
      ) : (
        <span>
          {"> "}
          {Id}
        </span>
      )}
    </div>
  );
};
export default Navigation;
