// import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar/navbar';
import ItemlistContainer from './componentes/ItemlistContainer/ItemlistContainer'
import CarritodeCompras from './componentes/CarritodeCompras/CarritodeCompras';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div classname="App">
      <Navbar/>
      <ItemlistContainer titulo="Productos"/>
      <CarritodeCompras/>
      <BrowserRouter>
        <Routes>
          <Route> path="/" element ={<ItemlistContainer />}</Route>
          <Route> path= "/category/:categoryID" element ={<ItemlistContainer />} </Route>
          <Route> path= "/detail/:productID" element ={<ItemDetailContainer />}</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;