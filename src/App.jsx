import './App.css'
import { Link } from 'react-router-dom';
import CustomRoutes from './Routes/Customroutes';
function App() {


  return (
   <div className='outer-pokedex'>
    <h1 className='pokedex-heading'>
      <Link to={"/"}>PokeDex</Link></h1>
    <CustomRoutes />
   </div>
  );
}

export default App
