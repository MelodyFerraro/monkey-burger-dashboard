import PanelTotales from "./PanelTotales";
import UltimoProducto from "./UltimoProducto";
import ProductosPorCategoria from "./ProductosPorCategoria";
import DetalleProducto from "./DetalleProducto";
import { useEffect, useState } from "react";

const DashboardHome = ({ props, ...otherProps }) => {
  const [productCount, setProductCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [prodPorCateg, setProdPorCateg] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchDataProducts() {
      const response = await fetch(
        "http://localhost:4000/products/api/products"
      );
      const parsedResponse = await response.json();
      setProducts(parsedResponse.products);
      setProductCount(parsedResponse.count);
      setProdPorCateg(parsedResponse.countByCategory);
    }

    fetchDataProducts();
  }, []);

  useEffect(() => {
    async function fetchDataUsers() {
      const response = await fetch("http://localhost:4000/users/api/users");
      const parsedResponse = await response.json();
      console.log("parsedResponse", parsedResponse);
      setUserCount(parsedResponse.count);
    }

    fetchDataUsers();
  }, []);

  const ultimoProducto = products.at(-1);
  const categoryCount = prodPorCateg.length;

  return (
    <main {...otherProps}>
      <div className="container-chico">
        <PanelTotales
          className="kpi"
          titulo="Productos en Sistema"
          valor={productCount}
        />
        <PanelTotales
          className="kpi"
          titulo="Usuarios en Sistema"
          valor={userCount}
        />
        <PanelTotales
          className="kpi"
          titulo="Categorías en Sistema"
          valor={categoryCount}
        />
      </div>
      <div className="container-mediano">
        <div className="mediano">
          <h4>Último Producto Creado</h4>
          {ultimoProducto ? (
            <UltimoProducto
              className="ultimo-producto"
              product={ultimoProducto}
            />
          ) : null}
        </div>
        <div className="mediano">
          <h4>Productos por Categoría</h4>
          {prodPorCateg.map((categoria) => (
            <ProductosPorCategoria
              key={categoria.name}
              className="container-categoria"
              categoria={categoria}
            />
          ))}
        </div>
      </div>
      <div className="container-grande">
        <div>
          <h4>Productos</h4>
        </div>
        <div className="container-productos">
          {products.map((producto) => (
            <DetalleProducto
              key={producto.id}
              className="detalle-producto"
              producto={producto}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default DashboardHome;
