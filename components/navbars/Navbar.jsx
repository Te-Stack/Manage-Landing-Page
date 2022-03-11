import { MenuItems } from "./MenuItems";
import { useState } from "react";
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";





const Navbar = () => {
    const [active, setActive] = useState(false);

    const toggleLinks = () => {
        setActive(!active);
      };

    const closeLinks = () =>{
        setActive(false)
    }

    return ( 
        <>
            <h1>Wahala Dey for who wan code better navbar</h1>
            
        </>
     );
}
 
export default Navbar;