/* eslint-disable @next/next/no-img-element */
import styles from "../styles/components/Profile.module.css"
import { ChallengesContext } from "../contexts/ChallengesContext";
import { useContext } from "react";

export function Profile(){

    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/jorgevvs.png" alt="Jorgevvs" />
            <div>
                <strong>Jorgevvs</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                     Level {level}</p>
            </div>
        </div>

    );
}