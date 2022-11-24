const Button = (props) => {
    return <button onClick={props.funcion} style= {{color :props.colorText}}>{props.children}</button>
}

export default Button
