import { MenuItems } from "./MenuItems";
import { useState } from "react";
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/images/logo.svg";





const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
      };

    const closeLinks = () =>{
        setActive(false)
    }

    return ( 
        <>
            <nav>
            <div className="nav-center">
                <div className="nav-header">
                <img className="logo" src={logo} alt="logo" loading="lazy"  />
                <button className="nav-toggle" onClick={handleClick}>
                    {active ? <FaTimes /> : <FaBars />}
                </button>
                </div>
                <div className="links-container" >
                <ul className="links">
                    
                    {MenuItems.map((link) => {
                    const { title, id, url, cName } = link;
                    return (
                        <li key={id} onClick={closeLinks}>
                        <Link key={id} className={cName} to={url}>
                            {title}
                        </Link>
                        </li>
                    );
                    })}
                </ul>
                </div>
            </div>
            </nav>
            
        </>
     );
}
 
export default Navbar;