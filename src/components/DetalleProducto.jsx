const DetalleProducto = ({ producto, ...otherProps }) => {
  const { name, image } = producto;
  return (
    <div {...otherProps}>
      <h5>{name}</h5>
      <img src={image} className="pic-chiquita" alt="product-pic" />
    </div>
  );
};

export default DetalleProducto;
