import type { HomeProps } from "../../Pages/Home";
import styles from "./Styles.module.css";


export function CountDown({ state }: HomeProps){
  return <div className={styles.container}>{state.formattedSecondsRemaining}</div>;
}
