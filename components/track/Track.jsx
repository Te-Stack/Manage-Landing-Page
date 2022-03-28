import Button from "../button/Button";
import styles from "./track.module.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Track = () => {
    return ( 
        <>
        <div className={styles.track}>
            <div className={styles.left}>
                <AnimationOnScroll animateIn="animate__tada">
                    <h2 >What's different about Manage?</h2> 
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
                </AnimationOnScroll>
               
            </div>
            <div className={styles.right}>
                <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                    <div className={styles.side}>
                        <div>
                            <Button text={"01"} />
                        </div>
                        <div>
                            <h6 className="text-3sm font-bold lg:text-lg">Track company-wide progress</h6>
                            <p>See how your day-to-day tasks fit into the wider vision. 
                                Go from tracking progress at the milestone level all the way done to the smallest of details, Never lose sight of the bigger picture again.
                            </p>
                        </div>
                    </div>

                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                    <div className={styles.side}>
                        <div>
                            <Button text={"02"} />

                        </div>
                        <div>
                            <h6 className="text-3sm font-bold lg:text-lg">Advanced built-in reports</h6>
                            <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stackholders informed
                            </p>
                        </div>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                    <div className={styles.side}>
                        <div>
                            <Button text={"03"} />

                        </div>
                        <div>
                            <h6 className="text-3sm font-bold lg:text-lg">Everything you need in one place</h6>
                            <p>Stop jumping from one service to another to communicate , store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                            </p>
                        </div>
                    </div>
                </AnimationOnScroll>
                
                
            </div>

        </div>
        
        </>
     );
}
 
export default Track;