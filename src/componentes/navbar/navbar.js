import "./navbar.css"
import Button from "../Button/Button"

const Navbar = (props)=> {

    const handOnClick = ()=> {
        alert("Hice click")
    }

    return
        <nav className = "navbar">
            <h1> Productos </h1>
            <Button colorText="black" funcion={handOnClick}>Home</Button>
            <Button colorText="black" funcion={handOnClick}>Productos</Button>
            <Button colorText="black" funcion={handOnClick}>Contacto</Button>
        </nav>
}

export default Navbar