import { MenuItems } from "./MenuItems";
import { useState } from "react";
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./navbar.module.scss"





const Navbar = () => {
    const [active, setActive] = useState(false);

    const toggleLinks = () => {
        setActive(!active);
      };


    

    return ( 
        <>
            <nav className={styles.NavbarItems}>
            <Link href="/"><h1 className="navbar-logo">Quincy Oghenetejiri</h1></Link>
            <div className="menu-icon" onClick={toggleLinks}>
            {active ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={active ? "nav-menu active": "nav-menu"}>
                <li>
                    <Link className="navlinks" href="/a"><a>Pricing</a></Link>
                    <Link className="navlinks" href="/b"><a>Product</a></Link>
                    <Link className="navlinks" href="/c"><a>About Us</a></Link>
                    <Link className="navlinks" href="/d"><a>Careers</a></Link>
                    <Link className="navlinks" href="/e"><a>Community</a></Link>
                </li>
            </ul>
        </nav>
            
        </>
     );
}
 
export default Navbar;