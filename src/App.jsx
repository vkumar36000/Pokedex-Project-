import './App.css'
import Custom_Routes from './Routes/CustomRoutes_';
import { Link } from 'react-router-dom';

function App() {


  return (
   <div className='outer-pokedex'>
    <h1 className='pokedex-heading'>
      <Link to={"/"}>PokeDex</Link></h1>
    <Custom_Routes />
   </div>
  );
}

export default App
