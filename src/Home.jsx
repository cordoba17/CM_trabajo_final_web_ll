import './Home.css'
import MenuNavegacion from "./components/MenuNavegacion"
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    
    
    <div className="min-h-screen flex flex-col">
      {/* Header o menú de navegación */}
      <MenuNavegacion />
      <Outlet />
    </div>                                                  

  );
}

export default Home;
