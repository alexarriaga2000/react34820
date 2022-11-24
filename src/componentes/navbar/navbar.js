import "./navbar.css"
import Button from "../Button/Button"


const Navbar = (props)=> {

    const handOnClick = ()=> {
        alert("Hice click")
    }

    const menu = [Home, Productos, Contacto]
    return
        <nav className = "navbar">
            <h1> Menú principal </h1>
            {/* { menu.map(label => <Button text={label}/>)} */}

            <Button colorText="black" funcion={handOnClick}>Home</Button>
            <Button colorText="black">Productos</Button>
            <Button colorText="black">Cotacto</Button>
        </nav>
}

export default Navbar