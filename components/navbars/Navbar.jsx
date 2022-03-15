import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./navbar.module.scss"
import Logo from "../../public/images/logo.svg"
import Button from "../button/Button"




const Navbar = () => {
    const [active, setActive] = useState(false);

    const toggleLinks = () => {
        setActive(!active);
      };
    

    return ( 
        <>
            <nav className={styles.NavbarItems}>
            <Link href="/"><Image className={styles.navbarlogo} src={Logo} height={50} width={80} /></Link>
            <div className={styles.menuicon} onClick={toggleLinks}> 
            {active ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={active ? `${styles.navmenu} ${styles.active}`: styles.navmenu}>
                <li>
                    <Link href="#"><a className={styles.navlinks}>Pricing</a></Link>
                </li>
                <li>
                    <Link  href="#"><a className={styles.navlinks}>Product</a></Link>
                </li>
                <li>
                    <Link href="#"><a className={styles.navlinks}>About Us</a></Link>
                </li>
                <li>
                    <Link href="#"><a className={styles.navlinks}>Careers</a></Link>
                </li>
                <li>
                    <Link href="#"><a className={styles.navlinks}>Community</a></Link>
                </li>      
            </ul>
            <Button className={styles.button1} />

            
        </nav>
            
        </>
     );
}
 
export default Navbar;