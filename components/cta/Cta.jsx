import Button from "../button/Button";
import Image from 'next/image'
import styles from "./cta.module.scss"
import img from "../../public/images/illustration-intro.svg"

const CTA = () => {
    return ( 
        <div className={styles.cta}>

            <div className={styles.con}>
                <div className={styles.first}>
                    <h1>Bring everyone together to build better products</h1>
                    <p>Manage makes it simple for software teams tos plan day-to-day tasks while keeping the larger team goals in views  </p>
                    <Button/>
                </div>
                <div>
                    <img className={styles.img1} src={img} />
                </div>


            </div>

        
        </div>
     );
}
 
export default CTA;