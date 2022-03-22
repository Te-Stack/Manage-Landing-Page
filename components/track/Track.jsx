import styles from "./track.module.scss"

const Track = () => {
    return ( 
        <>
        <div className={styles.track}>
            <div>
                <h2>What's different about Manage?</h2> 
                <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
            </div>
            <div>
                <div>
                    <div>
                        <button>1</button>
                    </div>
                    <div>
                        <h6>Track company-wide progress</h6>
                        <p>See how your day-to-day tasks fit into the wider vision. 
                            Go from tracking progress at the milestone level all the way done to the smallest of details, Never lose sight of the bigger picture again.
                        </p>
                    </div>
                </div>
                <div>
                <div>
                        <button>2</button>
                    </div>
                    <div>
                        <h6>Advanced built-in reports</h6>
                        <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stackholders informed
                        </p>
                    </div>
                </div>
                <div>
                <div>
                        <button>3</button>
                    </div>
                    <div>
                        <h6>Everything you need in one place</h6>
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