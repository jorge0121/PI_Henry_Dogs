import React, { Fragment, } from "react";
import { Link } from "react-router-dom";
import styles from "./DogCard.module.css";



export default function DogCard( { id, name, image, temperament, temperaments,weight_min } ) {


  if (!temperaments) {
    return (
      <Fragment>
        <div className={styles.dogCard}>
          <Link to={"/dogs/" + id}>
            <div className={styles.titleArea}>
              <h4 className={styles.dogName}>{name}</h4>
            </div>
            
            <div className={styles.infoArea}>
              <div className={styles.tempArea}>
                {temperament ? (
                  <h5 className={styles.dogTemp}>{temperament}</h5>
                ) : (
                  <br />
                )}
              </div>
              <div className={styles.imageArea}>
                <img
                  className={styles.dogImage}
                  src={image}
                  alt={`A dog wich is ` + { temperament }}
                  height="140px"
                />
                
                <h4 className={styles.peso}>{weight_min}</h4>
              </div>
            </div>
          </Link>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className={styles.dogCard}>
          <Link to={"/dogs/" + id}>
            <div className={styles.titleArea}>
              <h4 className={styles.dogName}>{name}</h4>
            </div>
            <div className={styles.infoArea}>
              <div className={styles.tempArea}>
                {temperaments ? (
                  <h6 className={styles.dogTemp}>
                    {temperaments.map((temp) => `${temp.name} `).join(', ')}
                  </h6>
                ) : (
                  <br />
                )}
              </div>

              <div className={styles.imageArea}>
                <img
                  className={styles.dogImage}
                  src={image}
                  alt={`A dog`}
                  height="140px"
                />
              </div>
            </div>
          </Link>
        </div>
      </Fragment>
    );
  }
}
