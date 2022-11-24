// import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar/navbar';
import ItemlistContainer from "../ItemlistContainer/ItemlistContainer"


function App() {
  return (
    <div classname="App">
      <Navbar/>
      <ItemlistContainer titulo="Productos"/>
    </div>
  );
}

export default App;