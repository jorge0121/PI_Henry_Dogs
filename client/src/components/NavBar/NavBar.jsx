import React, { Fragment } from "react";
import Logo from "../../assets/favicon-32x32.png";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


export default function NavBar() {
  return (
    <Fragment>
      <div className={styles.nav}>
      <div className={styles.TitleAndSearchBar}>
        <div className={styles.logoAndTitle}>
          <Link to="/home">
            <img
              id="logoHenry"
              src={Logo}
              alt="icon not fount"
              className={styles.logo}
            />
          </Link>
          <div>
            <h1>Guaau!</h1>
            
          </div>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
        <div className={styles.aboutNavButton}>
          <Link to="/about">About</Link>
        </div>
        <div className={styles.addnewdog}>
            <Link to="/newDog/">
              <span className="material-icons">Add New Dog</span>
              
            </Link>
          </div>
      </div>
    </Fragment>
  );
}
