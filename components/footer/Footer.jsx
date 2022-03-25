import Button from "../button/Button";
import styles from "./footer.module.scss"
import logo from "../../public/images/logo1.svg"

const Footer = () => {
    return ( 
        <>
        <div className={styles.footer}>
            <div className={styles.firstRow}>
                <div>
                    <img src={logo} />
                    
                </div>
                <div>
                    <img src="/images/icon-facebook.svg" />
                    <img src="/images/icon-youtube.svg" />
                    <img src="/images/icon-twitter.svg" />
                    <img src="/images/icon-pinterest.svg" />
                    <img src="/images/icon-instagram.svg" />
                </div>
            </div> 

            <div className={styles.secondRow}>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Pricings</li>
                        <li>Products</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Careers</li>
                        <li>Community</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className={styles.thirdRow}>
                <input type="text" name="text" placeholder="Updates in your inbox..." />
                <Button text={"Go"} />

                <p>Copyright 2020. All Rights Reserved</p>

            </div>
            

        </div>
        
        </>
     );
}
 
export default Footer;