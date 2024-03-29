import Head from 'next/head';


import { ExpBar } from "../components/ExpBar"
import { Profile } from "../components/Profile"
import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ChallengeBox } from "../components/ChallengeBox"
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from "../styles/pages/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Início | MoveIt</title>
      </Head>

      <ExpBar/>

      <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
      </CountdownProvider>
    </div>
  )
}
