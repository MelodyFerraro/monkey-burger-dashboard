const ProductosPorCategoria = ({categoria, ...otherProps}) => {
  const {category_name, total_products}= categoria;
  return (
    <div {...otherProps}>
      <div>{category_name}</div>
      <div>{total_products}</div>
    </div>
  );
};

export default ProductosPorCategoria;
