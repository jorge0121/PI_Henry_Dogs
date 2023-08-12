import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css'
import BG_video from './Media/BG_video.mp4'

export default function LandingPage(){
    return(
        <Fragment>
            <div className={styles.container}>
                <h1 className={styles.title}>Welcome to API Dogs</h1>
                <Link to='/home'>
                    <button className={styles.ButtonGo}>Guau!</button>
                </Link>
                <video autoPlay muted loop className={styles.bg_video}>
                    <source src={BG_video} type="video/mp4"/>
                </video>
            </div>
        </Fragment>
    )
}