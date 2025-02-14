import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
