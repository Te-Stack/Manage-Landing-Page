import Button from "../button/Button"
import styles from "./cta.module.scss"
import img from "../../public/images/illustration-intro.svg"
import  gsap from "gsap";
import { useEffect, useRef } from "react";
 

const CTA = () => {
    // const el = useRef();
    // const q = gsap.utils.selector(el);
    // const circleRef = useRef();

    // useEffect(()=>{
    //      // Target ALL descendants with the class of .box
    //     gsap.to(q(".box"), { x: 100 })

    // },[])
    


    return ( 
        <div className={styles.cta}>

            <div className={styles.con}>
                <div className={styles.first}>
                    <h2 className="text-4xl font-bold">Bring everyone together to build better products.</h2>
                    <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in views  </p>
                    <Button text={"Get Started"} />
                </div>
                <div>
                    <img  className={styles.img1} src={img} />
                </div>


            </div>

        
        </div>
     );
}
 
export default CTA;