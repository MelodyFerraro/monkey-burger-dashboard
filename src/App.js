import "./App.css";
import Header from "./components/Header";
import DashboardHome from "./components/DashboardHome";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="contenido">
      <Header className="header" marca="MONKEY BURGER" dashboard="Dashboard" />
      <DashboardHome />
      <Footer
        footer="Copyright &copy; Monkey Burger - DH 2022"
        className="footer"
      />
    </div>
  );
}
export default App;
