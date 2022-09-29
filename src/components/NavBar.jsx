import React from "react";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import "./NavBar.css"

const categories = [
    {
        id:1,
        path:"/category/electrodomesticos",
        name:"electrodomesticos",
    },
    {
        id:2,
        path:"/category/ropa",
        name:"ropa"
    },
    {
        id:3,
        path:"/category/camping",
        name:"camping"
    },
    {
        id:4,
        path:"/category/maquinaria",
        name:"maquinaria"
    },
  
];

const NavBar = () =>{

    return (
        <header>
            <Link className="nombre" to="/">Mercado Libre</Link>
                <nav className="nav">
                    <ul className="nav__list">
                        {categories.map((category) => (
                        <Link className="link" to={category.path} key={category.id}>{category.name}</Link>
                        ))}
                    </ul>
                </nav>
                <Link className="cart" to="/cart"> <CartWidget /> </Link>
        </header>
    )
}


export default NavBar;
