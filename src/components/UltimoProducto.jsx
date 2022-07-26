const UltimoProducto = ({ product, ...otherProps }) => {
  console.log("product", product);
  const { name, image, description } = product;
  return (
    <div {...otherProps}>
      <h5>{name}</h5>
      <img src={image} alt="foto de producto" width="250" />
      <div>{description}</div>
    </div>
  );
};

export default UltimoProducto;
