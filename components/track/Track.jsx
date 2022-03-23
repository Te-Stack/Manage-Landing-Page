import styles from "./track.module.scss"

const Track = () => {
    return ( 
        <>
        <div className={styles.track}>
            <div className={styles.left}>
                <h2 >What's different about Manage?</h2> 
                <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
            </div>
            <div className={styles.right}>
                <div className={styles.side}>
                    <div>
                        <button>01</button>
                    </div>
                    <div>
                        <h6 className="text-lg font-bold">Track company-wide progress</h6>
                        <p>See how your day-to-day tasks fit into the wider vision. 
                            Go from tracking progress at the milestone level all the way done to the smallest of details, Never lose sight of the bigger picture again.
                        </p>
                    </div>
                </div>
                <div className={styles.side}>
                <div>
                        <button>02</button>
                    </div>
                    <div>
                        <h6 className="text-lg font-bold">Advanced built-in reports</h6>
                        <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stackholders informed
                        </p>
                    </div>
                </div>
                <div className={styles.side}>
                    <div>
                        <button>03</button>
                    </div>
                    <div>
                        <h6 className="text-lg font-bold">Everything you need in one place</h6>
                        <p>Stop jumping from one service to another to communicate , store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                        </p>
                    </div>
                </div>
            </div>

        </div>
        
        </>
     );
}
 
export default Track;