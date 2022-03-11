import { MenuItems } from "./MenuItems";
import { useState } from "react";
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";





const Navbar = () => {
    const [active, setActive] = useState(false);

    const toggleLinks = () => {
        setActive(!active);
      };

    

    return ( 
        <>
            <nav className="NavbarItems">
            <Link to="/"><h1 className="navbar-logo">Quincy Oghenetejiri</h1></Link>
            <div className="menu-icon" onClick={toggleLinks}>
            {active ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={active ? "nav-menu active": "nav-menu"}>
                {MenuItems.map((items,index)=>{
                    return (
                        <li key={index}>
                            <Link
                             className={items.cName}
                              to={items.url} 
                              >
                                {items.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
            
        </>
     );
}
 
export default Navbar;