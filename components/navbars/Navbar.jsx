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
            <Link href="/"><h1 className={styles.navbarlogo}>Quincy Oghenetejiri</h1></Link>
            <div className={styles.menuicon} onClick={toggleLinks}>
            {active ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={active ? styles.navmenuactive: styles.navmenu}>
                <li>
                    <Link className={styles.navlinks} href="#"><a>Pricing</a></Link>
                    <Link className={styles.navlinks} href="#"><a>Product</a></Link>
                    <Link className={styles.navlinks} href="#"><a>About Us</a></Link>
                    <Link className={styles.navlinks} href="#"><a>Careers</a></Link>
                    <Link className={styles.navlinks} href="#"><a>Community</a></Link>
                </li>
            </ul>
        </nav>
            
        </>
     );
}
 
export default Navbar;