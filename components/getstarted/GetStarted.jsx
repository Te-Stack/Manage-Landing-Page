import Button from "../button/Button";
import styles from "./getstarted.module.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll';

const GetStarted = () => {
    return ( 
        <div className={styles.startdiv}>
            <div>
                <AnimationOnScroll animateIn="animate__bounceIn">
                    <h1 className="text-3xl xl:text-4xl font-bold">
                        Simplify how your team works today.
                    </h1>
                </AnimationOnScroll>
                
            </div>
            <div>
                <AnimationOnScroll animateIn="animate__bounceIn" delay={1000} >
                    <Button text={"Get Started"} /> 

                </AnimationOnScroll>
                   
            </div>
        </div>
     );
}
 
export default GetStarted;