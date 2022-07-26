const PanelTotales = ({ titulo, valor, ...otherProps }) => {
  return (
    <div {...otherProps}>
      <h4>{titulo}</h4>
      <h2>{valor}</h2>
    </div>
  );
};

export default PanelTotales;

