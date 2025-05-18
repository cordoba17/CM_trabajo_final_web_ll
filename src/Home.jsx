import './Home.css'
import Contenido from './components/Contenido';
import MenuNavegacion from "./components/MenuNavegacion"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header o menú de navegación */}
      <MenuNavegacion />
      <Contenido/>
    </div>
  );
}

export default Home
