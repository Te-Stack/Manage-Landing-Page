import Button from "../button/Button";
import styles from "./getstarted.module.scss"

const GetStarted = () => {
    return ( 
        <div className={styles.startdiv}>
            <div>
                <h1 className="text-3xl xl:text-4xl font-bold">
                    Simplify how your team works today.
                </h1>
            </div>
            <div>
                <Button/>    
            </div>
        </div>
     );
}
 
export default GetStarted;