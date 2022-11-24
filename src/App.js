// import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar/navbar';
import ItemlistContainer from './componentes/ItemlistContainer/ItemlistContainer'
import CarritodeCompras from './componentes/CarritodeCompras/CarritodeCompras';


function App() {
  return (
    <div classname="App">
      <Navbar/>
      <ItemlistContainer titulo="Productos"/>
      <CarritodeCompras/>
    </div>
  );
}

export default App;